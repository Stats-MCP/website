# statsmcp.dev website

The website of [StatsMCP](https://github.com/Stats-MCP/statsmcp), built with Astro. This repository is private.

## Commands

You need Node.js 24.21 or later and pnpm 12.

```sh
pnpm install
pnpm dev          # local server
pnpm build        # static site in dist/
pnpm check        # astro check (TypeScript)
pnpm test         # unit tests
pnpm lint         # oxlint
pnpm format       # oxfmt check (pnpm format:fix to correct)
```

## Rules

- Country facts (endpoints, databases, licences) must match the MCP repository.
- Code rules are the same as in the MCP repository: no `any`, named exports, `@/` imports, no nested ternaries, comments only when the reason is not clear.
