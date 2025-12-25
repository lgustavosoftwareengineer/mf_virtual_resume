import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_linkedin_provider',
  exposes: {
    '.': './src/components/index.tsx',
  },
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

