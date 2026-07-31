# Guida rapida: aggiungere nuove card IA

Questo file spiega come aggiungere nuovi strumenti nella griglia del sito.

## Dove modificare

Modifica la lista in `data/tools.ts`.

La renderizzazione delle card usa il componente `components/ToolCard.tsx`.

## Campi obbligatori per ogni strumento

Ogni elemento dell'array `tools` deve avere:

- `id`: identificatore univoco (minuscolo, senza spazi, usa `-`)
- `name`: nome dello strumento
- `description`: descrizione breve (1 o 2 frasi)
- `url`: link ufficiale dello strumento (importante per caricare il logo automaticamente)
- `category`: una delle categorie consentite
- `emoji`: campo legacy (ancora obbligatorio nel tipo, puoi mantenere un valore semplice)
- `gradient`: campo legacy (ancora obbligatorio nel tipo, puoi mantenere qualsiasi gradiente valido)
- `badge`: `Gratis`, `Freemium` oppure `A pagamento`
- `featured` (opzionale): `true` per evidenziarlo in alto

## Categorie consentite

Usa esattamente uno di questi valori:

- `imagem`
- `video`
- `texto`
- `codigo`
- `audio`
- `produtividade`
- `avatar`

## Esempio pronto

Copia e incolla dentro l'array `tools` in `data/tools.ts`:

```ts
{
  id: 'nome-dello-strumento',
  name: 'Nome dello Strumento',
  description: 'Descrizione breve di cosa fa lo strumento e per chi e utile.',
  url: 'https://sito-ufficiale.com',
  category: 'texto',
  emoji: '✨',
  gradient: 'linear-gradient(135deg, #334155, #0f172a)',
  badge: 'Freemium',
  featured: false,
}
```

## Come funziona il logo della card

- La card prova a caricare il logo automaticamente in base al dominio di `url`.
- Esempio: `https://chat.openai.com` -> usa il logo del dominio `chat.openai.com`.
- Se il logo non viene caricato, il sito mostra l'icona della categoria come fallback.

Per questo motivo, usa sempre la URL ufficiale corretta.

## Checklist rapida prima di salvare

- `id` univoco (non ripetere con un altro strumento)
- `url` valida e ufficiale
- `category` dentro la lista consentita
- `badge` con valore consentito
- descrizione chiara e breve

## Risultato

Dopo aver salvato `data/tools.ts`, la nuova card appare automaticamente nella griglia.