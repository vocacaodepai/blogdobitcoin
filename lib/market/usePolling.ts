"use client";

import { useCallback, useState, useSyncExternalStore } from "react";

/**
 * Busca periódica compartilhada no navegador: vários componentes que usam a
 * mesma `key` (ex.: o selo de preço do topo e o painel de /bitcoin) dividem
 * uma única busca e um único relógio. Pausa quando a aba fica escondida e
 * atualiza na hora quando a pessoa volta.
 */
export type PollSnapshot<T> = {
  data: T | null;
  /** Valor da leitura anterior (para mostrar a variação desde a última atualização). */
  prev: T | null;
  error: string | null;
  /** Momento da última leitura bem-sucedida (ms). */
  updatedAt: number;
  /** Momento previsto da próxima leitura (ms). */
  nextAt: number;
  loading: boolean;
  /** Últimas leituras (mais recente primeiro), só quando pedido com `historySize`. */
  history: { at: number; data: T }[];
};

type Entry<T> = {
  fetcher: () => Promise<T>;
  interval: number;
  historySize: number;
  listeners: Set<() => void>;
  timer: ReturnType<typeof setTimeout> | null;
  inflight: boolean;
  snapshot: PollSnapshot<T>;
};

const stores = new Map<string, Entry<unknown>>();

function emit<T>(entry: Entry<T>, patch: Partial<PollSnapshot<T>>) {
  entry.snapshot = { ...entry.snapshot, ...patch };
  entry.listeners.forEach((l) => l());
}

function schedule<T>(entry: Entry<T>) {
  if (entry.timer) clearTimeout(entry.timer);
  entry.timer = null;
  if (entry.listeners.size === 0) return;
  if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
  const delay = Math.max(0, entry.snapshot.nextAt - Date.now());
  entry.timer = setTimeout(() => void tick(entry), delay);
}

async function tick<T>(entry: Entry<T>) {
  if (entry.inflight) return;
  entry.inflight = true;
  emit(entry, { loading: true });
  try {
    const data = await entry.fetcher();
    const now = Date.now();
    const history = entry.historySize > 0 ? [{ at: now, data }, ...entry.snapshot.history].slice(0, entry.historySize) : [];
    emit(entry, {
      prev: entry.snapshot.data,
      data,
      history,
      error: null,
      updatedAt: now,
      nextAt: now + entry.interval,
      loading: false,
    });
  } catch (e) {
    // Em erro, tenta de novo mais cedo (metade do intervalo), mantendo o último dado.
    emit(entry, {
      error: e instanceof Error ? e.message : "erro",
      nextAt: Date.now() + Math.max(5000, entry.interval / 2),
      loading: false,
    });
  } finally {
    entry.inflight = false;
    schedule(entry);
  }
}

let visibilityBound = false;
function bindVisibility() {
  if (visibilityBound || typeof document === "undefined") return;
  visibilityBound = true;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    for (const entry of stores.values()) {
      if (entry.listeners.size === 0) continue;
      if (Date.now() >= entry.snapshot.nextAt) void tick(entry);
      else schedule(entry);
    }
  });
}

function getEntry<T>(key: string, fetcher: () => Promise<T>, interval: number, initial: T | null, historySize: number): Entry<T> {
  let entry = stores.get(key) as Entry<T> | undefined;
  if (!entry) {
    entry = {
      fetcher,
      interval,
      historySize,
      listeners: new Set(),
      timer: null,
      inflight: false,
      snapshot: {
        data: initial,
        prev: null,
        error: null,
        updatedAt: initial ? Date.now() : 0,
        // Com dado inicial do servidor, a primeira busca no navegador já acontece logo (dado pode ter até 60 s).
        nextAt: 0,
        loading: false,
        history: [],
      },
    };
    stores.set(key, entry as Entry<unknown>);
  }
  return entry;
}

export function usePolling<T>(
  key: string,
  fetcher: () => Promise<T>,
  intervalMs: number,
  initial: T | null = null,
  historySize = 0
): PollSnapshot<T> {
  const entry = getEntry(key, fetcher, intervalMs, initial, historySize);
  // Snapshot do servidor/hidratação: fixo por instância (o React exige o mesmo objeto a cada chamada).
  const [snapshotForServer] = useState<PollSnapshot<T>>(() => ({
    data: initial,
    prev: null,
    error: null,
    updatedAt: 0,
    nextAt: 0,
    loading: false,
    history: [],
  }));

  const subscribe = useCallback((listener: () => void) => {
    bindVisibility();
    entry.listeners.add(listener);
    if (entry.listeners.size === 1) {
      if (Date.now() >= entry.snapshot.nextAt) void tick(entry);
      else schedule(entry);
    }
    return () => {
      entry.listeners.delete(listener);
      if (entry.listeners.size === 0 && entry.timer) {
        clearTimeout(entry.timer);
        entry.timer = null;
      }
    };
  }, [entry]);

  return useSyncExternalStore(subscribe, () => entry.snapshot, () => snapshotForServer);
}
