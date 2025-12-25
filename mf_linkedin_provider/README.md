# LinkedIn Provider

Module Federation provider that exposes the LinkedInSection component.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

The provider will run on `http://localhost:3002`

## Build

```bash
pnpm build
```

## Module Federation

This provider exposes:
- `.` → `./src/components/LinkedInSection.tsx`

The module federation name is `mf_linkedin_provider` and must match the consumer's remote configuration.

## Deployment

This provider is configured to deploy to Zephyr Cloud. When you build, Zephyr will:
- Create an environment automatically
- Deploy the provider
- Provide a URL that can be used by the consumer

