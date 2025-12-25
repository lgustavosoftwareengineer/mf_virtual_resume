import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';

const LINKEDIN_PROVIDER_URL = process.env.ZE_PUBLIC_LINKEDIN_URL;
const GITHUB_PROVIDER_URL = process.env.ZE_PUBLIC_GITHUB_URL;

if (!LINKEDIN_PROVIDER_URL || !GITHUB_PROVIDER_URL) {
  throw new Error('LINKEDIN_PROVIDER_URL and GITHUB_PROVIDER_URL must be set');
}

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_consumer',
      remotes: {
        linkedin: `linkedin@${LINKEDIN_PROVIDER_URL}/mf-manifest.json`,
        github: `github@${GITHUB_PROVIDER_URL}/mf-manifest.json`,
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
      },
    }),
    withZephyr(),
  ],
  server: {
    port: 3000,
  },
});
