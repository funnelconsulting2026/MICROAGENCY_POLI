# Lorem Ipsum — sito dal template Figma

Sito Next.js (App Router) che riproduce tre landing del template. Tutti i testi visibili sono placeholder lorem. I JSON Figma e `assets/` restano intatti: le immagini usate sono copie in `site/public/images/`, oppure placeholder neutri se manca il node id.

## Stack

- Next.js 15 (App Router) + React 19
- CSS nativo con variabili semantiche
- Geist (`next/font/google`) per l’UI, Oswald per la wordmark display della home
- Breakpoint: `768px`

## Route

| URL | Pagina | JSON di riferimento |
|-----|--------|---------------------|
| `/` | Home | `desktop.json` + `mobile.json` (REST) |
| `/corsi` | Catalogo schede | `catalogo-corsi-desktop.json` + `catalogo-corsi-mobile.json` (structured-tree) |
| `/corsi/[slug]` | Dettaglio corso | `corso-specifico-desktop.json` + `corso-specifico-mobile.json` (structured-tree) |

Esempio di dettaglio: `/corsi/lorem-ipsum-dolor`.

Dalla home, le card corsi e le voci di menu/footer sui corsi aprono `/corsi`. Ogni scheda del catalogo apre il dettaglio. Logo e breadcrumb tornano a home o catalogo.

## Avvio locale

Dalla cartella `site/`:

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000). Verifica i due formati a **390px** e **1416px**, poi `/corsi` e un dettaglio.

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

Definite in `app/globals.css`: `--color-text`, `--color-surface`, `--color-accent`, `--color-brand`, `--color-brand-deep`, `--color-text-muted`, `--color-border`, ecc.

## Placeholder immagini

Le schede del catalogo e alcuni media dei nuovi frame non hanno file in `assets/` (node id 232/252/253/254). Lì si usano blocchi neutri (`catalog-placeholder`) con le stesse proporzioni del media Figma (es. 180px, radius 16). Nessuna foto esterna.
