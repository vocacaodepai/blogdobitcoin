/**
 * fetch com tempo limite: uma fonte que trava (rede que descarta pacotes, API lenta) não pode
 * segurar o polling de 10 s no navegador nem a renderização e a revalidação no servidor.
 * Estourado o prazo, a chamada falha e a próxima fonte da cascata é tentada.
 */
export function fetchWithTimeout(url: string, init?: RequestInit, ms = 6000): Promise<Response> {
  const timeout = typeof AbortSignal !== "undefined" && "timeout" in AbortSignal ? AbortSignal.timeout(ms) : undefined;
  return fetch(url, timeout && !init?.signal ? { ...init, signal: timeout } : init);
}
