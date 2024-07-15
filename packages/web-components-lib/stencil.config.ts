import { reactOutputTarget } from '@stencil/react-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components-lib',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'web-components-lib',
      proxiesFile: '../react-lib/lib/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      includeImportCustomElements: false,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
