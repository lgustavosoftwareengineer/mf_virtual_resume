import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

// In development mode (when running 'rsbuild dev'), use localhost
// In production mode (when running 'rsbuild build'), use Zephyr
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const useLocalhost = process.env.USE_LOCALHOST === 'true' || isDevelopment;

const plugins = [
  pluginReact(),
  pluginModuleFederation(moduleFederationConfig),
];

// Only use Zephyr in production or when explicitly not using localhost
if (!useLocalhost) {
  plugins.push(
    withZephyr({
      wait_for_index_html: true,
    })
  );
}

export default defineConfig({
  plugins,
  server: {
    port: 3000,
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
