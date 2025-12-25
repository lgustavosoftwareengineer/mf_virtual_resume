import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';


// In development, use localhost URLs; in production, Zephyr will inject URLs via zephyr:dependencies
// TODO: This must be loaded from a .env file
const LINKEDIN_PROVIDER_URL = "http://localhost:3002";
const GITHUB_PROVIDER_URL = "http://localhost:3003";


export default createModuleFederationConfig({
  name: 'mf_consumer',
  remotes: {
    // For rsbuild Module Federation, use the format: name@baseUrl/remoteEntryPath
    // The remote entry is at static/js/{name}.js based on the manifest
    // In production, Zephyr will replace these URLs with actual resolved URLs
    linkedin: `mf_linkedin_provider@${LINKEDIN_PROVIDER_URL}/static/js/mf_linkedin_provider.js`,
    github: `mf_github_provider@${GITHUB_PROVIDER_URL}/static/js/mf_github_provider.js`,
  },
  // Disable DTS (TypeScript definitions) generation and consumption
  // This prevents errors when trying to download types from remote URLs during development
  dts: false,
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
