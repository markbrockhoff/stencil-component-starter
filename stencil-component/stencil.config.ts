import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-starter-project-name',
  buildEs5: 'prod',
  extras: {
    tagNameTransform: true,
    appendChildSlotFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    shadowDomShim: true,
  },
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
      componentCorePackage: 'stencil-starter-project-name',
      proxiesFile: '../vue-target/src/proxies.ts',
      includeDefineCustomElements: false,
      includePolyfills: false,
    }),
  ],
};
