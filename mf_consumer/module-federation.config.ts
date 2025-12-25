import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

/**
 * Module Federation Configuration for mf_consumer
 * 
 * This configuration supports both local development and Zephyr Cloud deployment:
 * 
 * Local Development:
 * - Uses environment variables (LINKEDIN_PROVIDER_URL, GITHUB_PROVIDER_URL)
 * - Falls back to localhost URLs if env vars are not set
 * 
 * Zephyr Cloud Deployment:
 * - Zephyr automatically resolves remote URLs from zephyr:dependencies in package.json
 * - Remote names in 'remotes' must match keys in zephyr:dependencies
 * - Module Federation names (before @) must match provider's module federation name
 * 
 * @see https://docs.zephyr-cloud.io/features/remote-dependencies
 */

// Local development URLs (used when environment variables are not set)
const DEFAULT_LINKEDIN_URL = 'http://localhost:3002/mf-manifest.json';
const DEFAULT_GITHUB_URL = 'http://localhost:3003/mf-manifest.json';

// Get provider URLs from environment variables or use defaults for local development
// Zephyr will automatically replace these URLs during build when zephyr:dependencies are resolved
const LINKEDIN_PROVIDER_URL = process.env.LINKEDIN_PROVIDER_URL || DEFAULT_LINKEDIN_URL;
const GITHUB_PROVIDER_URL = process.env.GITHUB_PROVIDER_URL || DEFAULT_GITHUB_URL;

export default createModuleFederationConfig({
  name: 'mf_consumer',
  remotes: {
    // Remote key 'linkedin' must match the key in zephyr:dependencies (package.json)
    // Module Federation name 'mf_linkedin_provider' must match the provider's module federation name
    // Zephyr will automatically replace the URL when it resolves zephyr:dependencies
    linkedin: `mf_linkedin_provider@${LINKEDIN_PROVIDER_URL}`,

    // Remote key 'github' must match the key in zephyr:dependencies (package.json)
    // Module Federation name 'mf_github_provider' must match the provider's module federation name
    // Zephyr will automatically replace the URL when it resolves zephyr:dependencies
    github: `mf_github_provider@${GITHUB_PROVIDER_URL}`,
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
      strictVersion: false,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: false,
      strictVersion: false,
      eager: true,
    },
  },
});
