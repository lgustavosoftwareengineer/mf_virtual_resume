# GitHub Provider

Module Federation provider that exposes the GitHubSection component.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

The provider will run on `http://localhost:3003`

## Build

```bash
pnpm build
```

## Module Federation

This provider exposes:
- `.` → `./src/components/GitHubSection.tsx`

The module federation name is `mf_github_provider` and must match the consumer's remote configuration.

## Deployment

This provider is configured to deploy to Zephyr Cloud. When you build, Zephyr will:
- Create an environment automatically
- Deploy the provider
- Provide a URL that can be used by the consumer

