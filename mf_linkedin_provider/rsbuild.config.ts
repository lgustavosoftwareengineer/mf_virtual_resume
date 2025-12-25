import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_linkedin_provider',
      exposes: {
        '.': './src/components/index.tsx',
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
    port: 3002,
    cors: true,
  },
  tools: {
    rspack: {
      watchOptions: {
        ignored: ['**/dist/**', '**/node_modules/**', '**/@mf-types/**', '**/*.zip'],
      },
    },
  },
});

