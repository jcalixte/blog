# apoena.dev

Julien Calixte's blog, built with [îles](https://github.com/ElMassimo/iles).

Live at [apoena.dev](https://apoena.dev).

## Requirements

- Node.js >= 22
- pnpm 10

## Scripts

```sh
pnpm install      # install dependencies
pnpm dev          # start the dev server
pnpm build        # build for production
pnpm preview      # preview the production build on port 5050
pnpm typecheck    # run vue-tsc
```

## AT Protocol notes (`/pub`)

Pages under `/pub/:rkey/:slug` are generated at build time from records
published to my AT Protocol repository.

- DID: `did:plc:4m3kouplb7s7xozjd3whinvl`
- Collection: `site.standard.document`
- PDS endpoint is resolved via [plc.directory](https://plc.directory),
  then records are listed with `com.atproto.repo.listRecords`.

See `src/api/fetch-notes.ts` and `src/pages/pub/[rkey]/[slug].vue`.
