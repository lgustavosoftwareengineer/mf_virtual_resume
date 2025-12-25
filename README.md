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

### Known Limitations

⚠️ **Runtime Provider Resolution**: The consumer application is configured to use environment variables (`ZE_PUBLIC_LINKEDIN_URL` and `ZE_PUBLIC_GITHUB_URL`) to resolve the Module Federation remotes. While the providers are successfully deployed and accessible, the consumer application may encounter issues finding the deployed providers at runtime. This appears to be a runtime resolution issue rather than a build-time configuration problem.

For more details, see the [Zephyr Cloud Rsbuild documentation](https://docs.zephyr-cloud.io/integrations/react-rsbuild).

## Environment Variables

The project uses environment variables to configure Module Federation remotes. These are required for both local development and Zephyr Cloud deployments.

### Environment Variables

**Consumer (mf_consumer):**

The consumer application requires the following environment variables to be set:

- `ZE_PUBLIC_LINKEDIN_URL` - Base URL to the LinkedIn provider (without `/mf-manifest.json`)
- `ZE_PUBLIC_GITHUB_URL` - Base URL to the GitHub provider (without `/mf-manifest.json`)

**Note:** The `ZE_PUBLIC_` prefix indicates these are public environment variables that will be available in the browser. The URLs should be the base URL of the provider, and the `/mf-manifest.json` path will be appended automatically in the configuration.

### Local Development Setup

1. **Create a `.env` file in `mf_consumer` directory:**
   ```bash
   cd mf_consumer
   ```

2. **Add the environment variables:**
   ```env
   ZE_PUBLIC_LINKEDIN_URL=http://localhost:3002
   ZE_PUBLIC_GITHUB_URL=http://localhost:3003
   ```

### Zephyr Cloud Deployment

For Zephyr Cloud deployments, you need to set these environment variables in your Zephyr project settings:

1. **Set environment variables in Zephyr Cloud:**
   - `ZE_PUBLIC_LINKEDIN_URL` - The deployed LinkedIn provider URL (e.g., `https://your-linkedin-provider.zephyrcloud.app`)
   - `ZE_PUBLIC_GITHUB_URL` - The deployed GitHub provider URL (e.g., `https://your-github-provider.zephyrcloud.app`)

2. **Important:** These environment variables are required at build time. The consumer application will fail to build if these are not set.

**Example for Zephyr Cloud:**
```env
ZE_PUBLIC_LINKEDIN_URL=https://t-web-latest-luiz-gustavo-mf-linkedin-provider-mf-vir-aec68b-ze.zephyrcloud.app
ZE_PUBLIC_GITHUB_URL=https://t-web-latest-luiz-gustavo-mf-github-provider-mf-virtu-11a8f1-ze.zephyrcloud.app
```

### Notes

- Make sure all providers are running before accessing the consumer in local development
- Providers should be on ports 3002 (LinkedIn) and 3003 (GitHub) for local development
- The consumer runs on port 3000
- `.env` files are gitignored - create your own `.env` file for local development
- For Zephyr Cloud, set these variables in your project's environment settings
- The URLs should be base URLs without the `/mf-manifest.json` suffix - this is appended automatically in the configuration
