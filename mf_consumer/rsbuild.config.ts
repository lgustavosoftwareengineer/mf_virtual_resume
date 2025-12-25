import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation(moduleFederationConfig),
    withZephyr(
      {
        wait_for_index_html: true,
      }
    ), // Add Zephyr plugin after Module Federation
  ],
  tools: {
    rspack: {
      watchOptions: {
        ignored: ['**/dist/**', '**/node_modules/**', '**/@mf-types/**', '**/*.zip'],
      },
    },
  },
});
