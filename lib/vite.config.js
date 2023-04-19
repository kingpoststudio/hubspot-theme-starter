import { defineConfig } from 'vite';

const entries = {
  lit: 'node_modules/lit/index.js',
  'lit-decorators': 'node_modules/lit/decorators.js',
  card: 'src/components/card.ts',
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
    rollupOptions: {
      external: ['lit', 'lit-decorators'],
      output: {
        globals: {
          lit: 'lit',
          'lit-decorators': 'lit-decorators',
        },
      },
    },
    minify: true,
  },
});
