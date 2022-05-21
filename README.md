This is a reproduction of the issue described in https://github.com/trpc/trpc/issues/1904.

**PREREQUISITES**

- Node v16 (LTS)
  - Repo includes .nvmrc, use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to install
- pnpm v6 or v7 (both show the issue) (see: https://pnpm.io/installation)

**STEPS**

In order to reproduce, clone this repo and run the following commands:

```
pnpm install
pnpm compile
```

The latter will run `tsc -b tsconfig.json` in `./packages/server` and that'll show the issue.

The output will contain:

```
...
packages/server compile$ tsc -b tsconfig.json
packages/server compile: ../../node_modules/.pnpm/@trpc+server@9.23.4/node_modules/@trpc/server/dist/declarations/src/adapters/node-http/types.d.ts(3,16): error TS2307: Cannot find module 'qs' or its corresponding type declarations.
packages/server compile: ../../node_modules/.pnpm/@trpc+server@9.23.4/node_modules/@trpc/server/dist/declarations/src/adapters/standalone.d.ts(5,107): error TS2344: Type 'IncomingMessage' does not satisfy the constraint 'NodeHTTPRequest'.
packages/server compile:   Type 'IncomingMessage' is not assignable to type '{ method?: string; query?: any; body?: unknown; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
packages/server compile:     Types of property 'method' are incompatible.
packages/server compile:       Type 'string | undefined' is not assignable to type 'string'.
packages/server compile:         Type 'undefined' is not assignable to type 'string'.
packages/server compile: Failed
...
```

## LICENSE

see [LICENSE](./LICENSE)
