import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-starter-project-name',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: '../../stencil-component/dist/types/index', // Small trick so the build package does not have to be linked to vue-target
      proxiesFile: '../vue-target/src/proxies.ts',
      includeDefineCustomElements: false,
      includePolyfills: false,
    }),
  ],
};
