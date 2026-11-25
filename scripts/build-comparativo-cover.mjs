#!/usr/bin/env node
/**
 * Gera uma capa 1600x900 tipo "comparativo" com 2 ou 3 cards brancos (sombra
 * suave), uma foto de produto por card e o nome do modelo escrito por nós
 * embaixo, sobre um fundo com leve gradiente. Mesma técnica 100% local do
 * build-product-cover.mjs, sem gerador de imagem por IA.
 *
 *   node scripts/build-comparativo-cover.mjs <saida.jpg> "<Label 1>" <foto1> "<Label 2>" <foto2> ["<Label 3>" <foto3>]
 */
import sharp from "sharp";
import { resolve } from "node:path";

const argv = process.argv.slice(2);
const output = argv[0];
const items = [];
for (let i = 1; i < argv.length; i += 2) {
  items.push({ label: argv[i], photo: argv[i + 1] });
}
if (!output || items.length < 2 || items.length > 3) {
  console.error(
    'uso: node scripts/build-comparativo-cover.mjs <saida.jpg> "<Label 1>" <foto1> "<Label 2>" <foto2> ["<Label 3>" <foto3>]'
  );
  process.exit(1);
}

const W = 1600;
const H = 900;
const PAD = 64;
const GAP = 32;
const CARD_RADIUS = 20;
const LABEL_H = 90;
const n = items.length;
const cardW = Math.floor((W - PAD * 2 - GAP * (n - 1)) / n);
const cardH = H - PAD * 2 - LABEL_H;
const cardTop = PAD;

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const bgSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eef1f8"/>
      <stop offset="100%" stop-color="#e3e8f3"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#1f2937" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${items
    .map((it, i) => {
      const x = PAD + i * (cardW + GAP);
      return `<rect x="${x}" y="${cardTop}" width="${cardW}" height="${cardH}" rx="${CARD_RADIUS}" fill="#ffffff" filter="url(#shadow)"/>`;
    })
    .join("\n  ")}
</svg>`;

const labelSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .lbl { font-family: 'DejaVu Sans Mono', 'Courier New', monospace; font-weight: 700; font-size: 30px; fill: #1e293b; }
  </style>
  ${items
    .map((it, i) => {
      const x = PAD + i * (cardW + GAP) + cardW / 2;
      const y = cardTop + cardH + 56;
      return `<text x="${x}" y="${y}" text-anchor="middle" class="lbl">${escapeXml(it.label)}</text>`;
    })
    .join("\n  ")}
</svg>`;

const base = sharp(Buffer.from(bgSvg)).jpeg();

const composites = [];
for (let i = 0; i < items.length; i++) {
  const x = PAD + i * (cardW + GAP);
  const innerPad = 48;
  const maxW = cardW - innerPad * 2;
  const maxH = cardH - innerPad * 2;
  const photoBuf = await sharp(resolve(items[i].photo))
    .resize(maxW, maxH, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  const meta = await sharp(photoBuf).metadata();
  const left = x + Math.round((cardW - meta.width) / 2);
  const top = cardTop + Math.round((cardH - meta.height) / 2);
  composites.push({ input: photoBuf, left, top });
}

const labelPng = await sharp(Buffer.from(labelSvg)).png().toBuffer();
composites.push({ input: labelPng, left: 0, top: 0 });

await sharp(await base.toBuffer())
  .composite(composites)
  .jpeg({ quality: 92 })
  .toFile(resolve(output));

console.log(`build-comparativo-cover: gerado ${output} (${W}x${H}, ${n} produtos)`);
