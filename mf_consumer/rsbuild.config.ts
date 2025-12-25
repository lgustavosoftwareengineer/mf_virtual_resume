import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_consumer',
      remotes: {
        linkedin: 'linkedin@http://localhost:3002/mf-manifest.json',
        github: 'github@http://localhost:3003/mf-manifest.json',
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
