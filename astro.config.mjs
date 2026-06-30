// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://nutechcorp.com',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  integrations: [
    tailwind(), 
    react({
      include: ['**/animations/**/*.tsx']
    })
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js'
        }
      }
    }
  }
});