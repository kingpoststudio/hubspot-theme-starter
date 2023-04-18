import { defineConfig } from 'vite';

const entries = {
  index: 'src/index.ts',
  container: 'src/components/container.ts',
}

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    lib: {
      entry: entries,
      formats: ['es'],
      declaration: true,
      declarationDir: 'dist',
    },
    minify: true,
  },
});
