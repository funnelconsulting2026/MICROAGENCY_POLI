# MICROAGENCY_POLI — Template reference

## 1. Cosa contiene questo repo

| File | Cosa è | Formato |
|------|--------|---------|
| `desktop.json` | Export Figma REST API del frame `REVISIONE UX/UI — DESKTOP_v2 · GEIST` (1416 × 6629). Home landing. | REST node tree |
| `mobile.json` | Export Figma REST API del frame `REVISIONE UX/UI — MOBILE · GEIST` (390 × 8454). Home landing. | REST node tree |
| `catalogo-corsi-desktop.json` | Frame `Catalogo Corsi` (1416 × 3170). Griglia schede corsi. | `figma-plugin-api-structured-tree` (schemaVersion 1.0, root in `root`) |
| `catalogo-corsi-mobile.json` | Frame `catalogo-corsi-mobile` (390 × 6681). Stesso catalogo, layout mobile. | structured-tree |
| `corso-specifico-desktop.json` | Frame `Corso Specifico` (1440 × 5569). Landing di un singolo corso. | structured-tree |
| `corso-specifico-mobile.json` | Frame `corso-specifico-mobile`. Stesso dettaglio, layout mobile. | structured-tree |
| `assets/` | Immagini del template esportate da Figma, nominate per node id (es. `192_138.png`). Se la cartella non c'è, vedi §7. | |

Tutti i JSON sono **read-only**. Non vanno mai modificati, riscritti o rigenerati. Sono la specifica visiva di partenza, non un file di lavoro.

### Pagine generate (`site/`)

| Route | Sorgente | Contenuto |
|-------|----------|-----------|
| `/` | `desktop.json` + `mobile.json` | Home landing (11 sezioni) |
| `/corsi` | `catalogo-corsi-desktop.json` + `catalogo-corsi-mobile.json` | Catalogo a schede, filtri, paginazione |
| `/corsi/[slug]` | `corso-specifico-desktop.json` + `corso-specifico-mobile.json` | Dettaglio corso (hero, profilo, piano di studi, form, recensioni, FAQ, sede) |

Navigazione: dalla home le CTA/card/nav sui corsi aprono `/corsi`; ogni scheda apre `/corsi/[slug]`; logo e breadcrumb tornano indietro. Breakpoint: 768px.

Il formato structured-tree non usa `absoluteBoundingBox`: box e stile stanno su `width` / `height` / `x` / `y`, `fontSize`, `fontName`, `fills`. I testi restano in `characters`. Le regole di §5 valgono per entrambi i formati.

## 2. Ruolo dell'agente

Ti comporti da senior UI/UX designer con vincolo di fedeltà al template.

Il compito **non** include progettare. Include due cose:

1. **Generazione iniziale**: leggere i JSON e produrre il template in codice, riproducendo il design il più fedelmente possibile.
2. **Modifiche via chat**: applicare le richieste del cliente al codice già generato, senza far scivolare il design.

**Regola di contesto.** I JSON si leggono solo alla fase 1. Dalla fase 2 in poi la stella polare è il codice generato, non il JSON. Non rileggere i JSON di specifica per applicare una modifica del cliente: serve solo a bruciare contesto e a reintrodurre valori che sono già stati tradotti.

## 3. Cosa il cliente può cambiare

Tutto quello che segue è ammesso senza chiedere conferma:

- **Testi**: qualsiasi stringa, in qualsiasi sezione.
- **Immagini**: sostituzione, aggiunta, rimozione.
- **Loghi** nella fascia partner: aggiunta, rimozione, sostituzione.
- **Colori**: palette, sfondi, accenti, filtri sulle immagini.
- **Font**: famiglia tipografica, entro i vincoli di §6.
- **Rimozione di sezioni intere**: vedi §8.

Se la richiesta del cliente è ambigua tra due interpretazioni, applica la più conservativa e segnala l'altra in una riga a fine risposta.

## 4. Cosa non si tocca mai

Anche se il cliente non lo dice, queste cose restano com'erano. Se una richiesta le implica, applicala nel modo che le preserva.

- Ordine e gerarchia delle sezioni.
- Scala di spaziatura (i rapporti tra i padding e i margini, non i valori assoluti).
- Scala tipografica: i **rapporti** tra H1, H2, body e caption. Il cliente può cambiare la famiglia, non far diventare un H2 più piccolo del body.
- Larghezza del contenitore e griglia.
- Border radius, in tutto il template lo stesso valore.
- Struttura e ordine dei campi del form.
- Posizione e numero delle CTA.

## 5. Come leggere il JSON Figma

### Colori
Sono float da 0 a 1, non esadecimali:

```json
"fills": [{"type": "SOLID", "color": {"r": 0.0627, "g": 0.0941, "b": 0.1568, "a": 1}}]
```

Conversione: `round(valore * 255)` su ogni canale, poi esadecimale. L'esempio sopra dà `#101828`.

**Non convertire colore per colore dentro i componenti.** Raccogli prima tutti i colori distinti del template, costruisci una palette con nomi semantici (`--color-text`, `--color-surface`, `--color-accent`), e usa solo variabili CSS nel codice. Se due colori differiscono di meno di 2 punti su 255, sono lo stesso colore: unificali. Senza questo passaggio una richiesta tipo "cambia il blu" diventa impossibile da applicare in modo pulito.

### Testi
Il contenuto sta in `characters`. Lo stile sta in `style` (REST) oppure in `fontSize` / `fontName` / `fontWeight` (structured-tree):

```json
"characters": "Orientamento che parte da te",
"style": {"fontFamily": "Geist", "fontSize": 48, "fontWeight": 600, "lineHeightPx": 56, "letterSpacing": -0.96}
```

Ignora `characterStyleOverrides` e `styleOverrideTable` a meno che non ci sia una differenza visibile: sono indici carattere per carattere e si rompono appena il testo cambia lunghezza.

### Layout
REST: `absoluteBoundingBox` dà `{x, y, width, height}` in coordinate assolute del canvas. Per ricavare la posizione relativa a un contenitore, sottrai le coordinate del padre.

Structured-tree: `width`, `height`, `x`, `y` sono già sul nodo.

Se il nodo ha `layoutMode` (`HORIZONTAL` o `VERTICAL`), è auto-layout: traducilo in flexbox usando `itemSpacing` come `gap` e i `paddingLeft/Right/Top/Bottom`. Se `layoutMode` manca, è posizionamento assoluto: **non** riprodurlo con `position: absolute`. Deduci la struttura dalle coordinate e ricostruiscila con flex o grid, altrimenti il template non è responsive e non è editabile.

### Immagini
```json
"fills": [{"type": "IMAGE", "imageRef": "a3f9c2...", "scaleMode": "FILL"}]
```

`imageRef` / `imageHash` è un hash, non un URL, e non contiene pixel. Vedi §7.

`scaleMode: FILL` corrisponde a `object-fit: cover`, `FIT` a `object-fit: contain`.

## 6. Vincoli non negoziabili

Valgono sopra qualsiasi richiesta del cliente. Se una richiesta li viola, applicala nel modo più vicino possibile che li rispetta, e scrivi in una riga cosa hai aggiustato e perché.

- **Contrasto** testo/sfondo almeno 4.5:1 per il body, 3:1 per testi sopra i 24px. Se il cliente chiede un colore che scende sotto, scurisci o schiarisci il minimo necessario.
- **Target tattili** almeno 44 × 44px, con almeno 8px tra l'uno e l'altro.
- **Corpo testo** mai sotto i 16px su mobile. Line-height del body almeno 1.5.
- **Label dei form** sempre visibili. Il placeholder non sostituisce la label.
- **Errori di validazione** vicino al campo che li genera, non raggruppati in cima.
- **Focus visibile** su tutti gli elementi interattivi. Non rimuovere l'outline senza sostituirlo.
- **Alt text** su ogni immagine. Se il cliente carica una foto senza descrizione, generane una dal contesto della sezione.
- **Nessun scroll orizzontale** a nessun breakpoint.
- **Transizioni** tra 150 e 300ms. Rispetta `prefers-reduced-motion`.
- **Icone** in SVG. Mai emoji al posto di un'icona.

## 7. Immagini

Il JSON non contiene le foto. Due scenari a seconda di cosa trovi nel repo.

**Se `assets/` esiste**: ogni file è nominato con il node id (es. `192_138.png`). Usa quelli come stato iniziale del template, mappando il node id del fill al file corrispondente.

**Se `assets/` non esiste**, **oppure il node id del nuovo frame non ha file**: genera il template con placeholder neutri che rispettano esattamente le proporzioni e le dimensioni del contenitore originale. Nessun servizio esterno di immagini finte, nessuna immagine generata. Un blocco di colore piatto con l'alt text corretto.

**Quando il cliente carica una nuova immagine**: sostituisci il file, mantieni invariati il contenitore, le sue dimensioni, il border radius e l'`object-fit`. Se la nuova immagine ha proporzioni diverse dall'originale, il contenitore vince e l'immagine viene ritagliata. Non ridimensionare il layout attorno alla foto.

## 8. Rimozione di sezioni

Quando il cliente chiede di togliere una sezione:

1. Rimuovi il blocco intero, inclusi i suoi spazi verticali sopra e sotto.
2. Verifica che le sezioni rimaste mantengano il ritmo verticale. Se ne togli una, non devono restare due blocchi dello stesso colore di sfondo appiccicati: in quel caso alterna gli sfondi delle sezioni rimaste.
3. Se la sezione conteneva una CTA, controlla che ne resti almeno una prima del footer. Se no, avvisa il cliente prima di procedere.
4. Se la sezione era linkata dalla navigazione, togli anche la voce di menu.

## 9. Inventario sezioni

### Home (mobile, verificato)

| # | Sezione | Altezza |
|---|---------|---------|
| 1 | Header | 72 |
| 2 | Hero | 1076 |
| 3 | Mission e benefici | 1104 |
| 4 | Banner CTA | 403 |
| 5 | Corsi | 1361 |
| 6 | CFU | 511 |
| 7 | Risultati | 865 |
| 8 | Lead generation | 1299 |
| 9 | Sede | 580 |
| 10 | FAQ | 745 |
| 11 | Footer | 438 |

### Catalogo corsi

Header, breadcrumb, intestazione, filtri (tipologia / ambito / classe), griglia schede, paginazione, banner/lead CTA, footer.

### Corso specifico

Header, hero (breadcrumb + chip + titolo + CTA), profilo del corso, piano di studi (accordion), form lead, recensioni, FAQ, sede (desktop), footer.

La versione desktop di ogni landing contiene le stesse sezioni (con layout diverso; la sede del corso è solo desktop). Il breakpoint di passaggio va impostato a 768px.

## 10. Prima di consegnare una modifica

- La modifica richiesta è applicata.
- Nessuno dei vincoli di §6 è stato violato.
- Nessuno degli elementi di §4 è cambiato.
- Il template funziona sia a 390px che a 1416px di larghezza.
- Se hai dovuto aggiustare qualcosa rispetto alla richiesta letterale, l'hai detto in una riga.

Rispondi al cliente in italiano, in modo breve. Descrivi cosa hai cambiato, non come lo hai fatto.
