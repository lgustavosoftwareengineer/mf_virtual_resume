import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation(moduleFederationConfig),
    withZephyr(), // Add Zephyr plugin after Module Federation
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

