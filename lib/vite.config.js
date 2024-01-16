import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    lib: {
      entry: {
        globals: 'src/globals.ts',
        'hero-banner': 'src/modules/hero-banner.ts',
      },
      formats: ['es'],
      declaration: true,
      declarationDir: 'dist',
    },
    minify: true,
  },
});
