#!/usr/bin/env node
// Mostra qual foto do Wikimedia Commons cada artigo e notícia vai usar de capa, para a
// rotina (ou o editor) conferir se a foto é mesmo do assunto. A busca do Commons é solta e
// já trouxe foto de outra pessoa com o mesmo sobrenome; lib/wikimedia.ts filtra boa parte,
// mas a conferência final é humana: abra a página do arquivo quando o nome não bastar.
//
// Uso: npm run check:covers [-- slug-1 slug-2 ...]
// Capa fixada: imageQuery: "File:Nome exato do arquivo.jpg" (arquivo conferido à mão).
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { getWikimediaFileInfo, getWikimediaImage, isPinnedFile } from "../lib/wikimedia.ts";

const ROOT = new URL("..", import.meta.url).pathname;
const only = new Set(process.argv.slice(2));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Mesmo hash de lib/news.ts (newsImageSeed), para escolher a mesma foto que o site.
function newsImageSeed(slug) {
  let hash = 5381;
  for (let i = 0; i < slug.length; i++) hash = (hash * 33) ^ slug.charCodeAt(i);
  return Math.abs(hash);
}

function items(dir, kind) {
  return readdirSync(join(ROOT, dir))
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => {
      const text = readFileSync(join(ROOT, dir, f), "utf8");
      const query = text.match(/imageQuery:\s*"((?:[^"\\]|\\.)*)"/)?.[1]?.replace(/\\"/g, '"');
      const slug = f.replace(/\.ts$/, "");
      const seed = kind === "notícia" ? newsImageSeed(slug) : Number(text.match(/\bseed:\s*(\d+)/)?.[1] ?? 0);
      const override = /\bcoverImage:\s*\{/.test(text);
      return { kind, slug, query, seed, override };
    });
}

const list = [...items("content/articles", "artigo"), ...items("content/news", "notícia")].filter((i) => only.size === 0 || only.has(i.slug));
let errors = 0;
for (const it of list) {
  if (it.override) {
    console.log(`${it.kind} ${it.slug}: foto própria (coverImage)`);
    continue;
  }
  if (!it.query) {
    console.log(`${it.kind} ${it.slug}: sem imageQuery (sem capa)`);
    continue;
  }
  const pinned = isPinnedFile(it.query);
  const photo = pinned ? await getWikimediaFileInfo(it.query, it.query) : await getWikimediaImage(it.query, it.seed);
  if (!photo) {
    if (pinned) errors++;
    console.log(`${it.kind} ${it.slug}: "${it.query}" -> ${pinned ? "ERRO: arquivo fixado não existe ou sem licença" : "nenhuma foto do Commons (cai em Pexels/Pixabay ou na capa ilustrada)"}`);
  } else {
    const file = decodeURIComponent(photo.photographerUrl.replace("https://commons.wikimedia.org/wiki/", ""));
    console.log(`${it.kind} ${it.slug}: "${it.query}" -> ${file} [${photo.photographer}]${pinned ? " (fixada)" : ""}`);
  }
  await sleep(1500);
}
if (errors) {
  console.error(`check-covers: ${errors} capa(s) fixada(s) com erro`);
  process.exit(1);
}
