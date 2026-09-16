# Lorem Ipsum — sito dal template Figma

Sito statico Next.js (App Router) che riproduce i frame desktop e mobile del template. Tutti i testi visibili sono placeholder lorem. I JSON Figma e la cartella `assets/` del repo restano intatti: le immagini usate sono copie in `site/public/images/`.

## Stack

- Next.js 15 (App Router) + React 19
- CSS nativo con variabili semantiche
- Geist (`next/font/google`) per l’UI, Oswald per la wordmark display desktop
- Breakpoint: `768px` (mobile da `mobile.json`, desktop da `desktop.json`)

## Avvio locale

Dalla cartella `site/`:

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000). Verifica i due formati a **390px** e **1416px**.

## Build

```bash
npm run build
npm start
```

`npm run build` deve completare senza errori (prerequisito per un preview deploy).

## Preview deploy

Il progetto è un’app Next.js standard, quindi si pubblica come qualsiasi altro sito Next:

**Vercel**

1. Dalla root del repo, oppure da `site/`: [Import on Vercel](https://vercel.com/new)
2. Root Directory: `site`
3. Build Command: `npm run build`
4. Output: default Next.js (niente export statico obbligatorio)

**Netlify**

1. New site from Git
2. Base directory: `site`
3. Build command: `npm run build`
4. Publish: usa il plugin ufficiale Next.js (`@netlify/plugin-nextjs`), non una cartella `out`

CLI veloce, se hai l’account già collegato:

```bash
cd site
npx vercel
```

## Palette (variabili)

Definite in `app/globals.css`: `--color-text`, `--color-surface`, `--color-accent`, `--color-brand`, `--color-brand-deep`, `--color-text-muted`, `--color-border`, ecc. I valori Figma 0–1 sono convertiti in hex e i colori quasi identici sono unificati.

## Sezioni

Header, Hero, Mission e benefici, Banner CTA, Corsi, CFU, Risultati, Lead generation, Sede, FAQ, Footer — nello stesso ordine su entrambi i breakpoint.
