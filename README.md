# Module Federation - Virtual Resume

Virtual resume application using Module Federation with React and Tailwind CSS.

> **Note:** This project is a POC using Module Federation + Zephyr Cloud

## Project Structure

- **mf_consumer**: Main application that consumes the providers (port 3000)
- **mf_linkedin_provider**: Provider with LinkedIn section (port 3002)
- **mf_github_provider**: Provider with GitHub section (port 3003)


## How to Run

### 1. Install dependencies

In each directory, run:

```bash
# Consumer
cd mf_consumer
pnpm install

# LinkedIn Provider
cd ../mf_linkedin_provider
pnpm install

# GitHub Provider
cd ../mf_github_provider
pnpm install
```

### 2. Start the servers

Open 3 terminals and run in each:

**Terminal 1 - LinkedIn Provider:**
```bash
cd mf_linkedin_provider
pnpm dev
```

**Terminal 2 - GitHub Provider:**
```bash
cd mf_github_provider
pnpm dev
```

**Terminal 3 - Consumer:**
```bash
cd mf_consumer
pnpm dev
```

### 3. Access the application

Open your browser at `http://localhost:3000` to see the virtual resume.

## Features

- **LinkedIn Section**: Displays professional information from the LinkedIn profile
- **GitHub Section**: Displays information from the GitHub profile, including repositories, stars, and highlights

## Technologies

- React 18
- TypeScript
- Tailwind CSS v4
- Module Federation (Rsbuild Plugin)
- Rsbuild
- Zephyr Cloud (for deployment)

## Deploying to Zephyr Cloud

This project is configured to deploy to Zephyr Cloud. Follow these steps to deploy:

### Prerequisites

1. **Zephyr Cloud Account**: Make sure you have a Zephyr Cloud account and are logged in
2. **Browser Extension**: Install the Zephyr Cloud browser extension (required for authentication)
3. **Git Repository**: Your project should be in a Git repository (preferably pushed to GitHub)

### Installation

Install the Zephyr plugin in each project:

```bash
# Consumer
cd mf_consumer
pnpm install

# LinkedIn Provider
cd ../mf_linkedin_provider
pnpm install

# GitHub Provider
cd ../mf_github_provider
pnpm install
```

### Remote Dependencies Configuration

This project uses Zephyr's **Remote Dependencies** system to automatically resolve and inject remote URLs at build time. The configuration is in `mf_consumer/package.json`:

```json
{
  "zephyr:dependencies": {
    "linkedin": "mf_linkedin_provider.mf-digital-cv.lgustavosoftwareengineer@latest",
    "github": "mf_github_provider.mf-digital-cv.lgustavosoftwareengineer@latest"
  }
}
```

**Application UID Format**: `{application}.{project}.{organization}@version`

- **application**: The `name` field from the provider's `package.json` (e.g., `mf_linkedin_provider`)
- **project**: The git repository name (e.g., `mf-digital-cv`)
- **organization**: Your GitHub/GitLab organization or username (e.g., `lgustavosoftwareengineer`)
- **version**: Version selector (e.g., `@latest`, `@stable`, `@v1.0.0`, or semantic version ranges)

Zephyr will automatically:
- Resolve the remote dependencies during build
- Inject the correct URLs into your Module Federation configuration
- Validate that dependencies exist and are accessible

For more details, see the [Zephyr Remote Dependencies documentation](https://docs.zephyr-cloud.io/features/remote-dependencies).

### Deployment Steps

1. **Deploy Providers First** (in order):
   ```bash
   # Deploy LinkedIn Provider
   cd mf_linkedin_provider
   pnpm build
   # Zephyr will prompt you to log in on first build
   # Zephyr will create an environment automatically
   
   # Deploy GitHub Provider
   cd ../mf_github_provider
   pnpm build
   # Zephyr will create an environment automatically
   ```

2. **Deploy Consumer**:
   ```bash
   cd mf_consumer
   pnpm build
   # Zephyr will automatically resolve the provider dependencies
   # and inject the correct URLs during build
   # Zephyr will deploy and provide the final consumer URL
   ```

### Important Notes

- **First Build**: The first time you build with Zephyr, it will prompt you to log in via the Zephyr website
- **Plugin Order**: The Zephyr plugin (`withZephyr()`) must be added **after** the Module Federation plugin in `rsbuild.config.ts`
- **Authentication**: Make sure you're logged into Zephyr Cloud (check with browser extension)
- **Automatic Resolution**: Zephyr automatically resolves remote dependencies - no need to manually update URLs
- **Local Development**: For local development, use `.env` files with localhost URLs (Zephyr will use these as fallback if dependencies can't be resolved)

For more details, see the [Zephyr Cloud Rsbuild documentation](https://docs.zephyr-cloud.io/integrations/react-rsbuild).

## Environment Variables

The project uses environment variables for **local development only**. For Zephyr Cloud deployments, remote URLs are automatically resolved via `zephyr:dependencies` in `package.json`.

### Local Development Setup

1. **Copy the example file:**
   ```bash
   cd mf_consumer
   cp .env.example .env
   ```

2. **Configure URLs:**
   - For **local development**: The `.env` file is already configured with localhost URLs
   - For **Zephyr Cloud deployment**: No `.env` file needed - Zephyr automatically resolves dependencies via `zephyr:dependencies`

### Environment Variables

**Consumer (.env):**
- `LINKEDIN_PROVIDER_URL` - URL to the LinkedIn provider's manifest file
- `GITHUB_PROVIDER_URL` - URL to the GitHub provider's manifest file

**Note:** For Zephyr Cloud deployments, you don't need to set these environment variables. Zephyr automatically resolves and injects the URLs from `zephyr:dependencies` in `package.json`.

**Example for local development:**
```env
LINKEDIN_PROVIDER_URL=http://localhost:3002/mf-manifest.json
GITHUB_PROVIDER_URL=http://localhost:3003/mf-manifest.json
```

### Notes

- Make sure all providers are running before accessing the consumer
- Providers should be on ports 3002 (LinkedIn) and 3003 (GitHub)
- The consumer runs on port 3000
- `.env` files are gitignored - use `.env.example` as a template
