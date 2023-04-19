import { defineConfig } from 'vite';

const entries = {
  lit: 'node_modules/lit/index.js',
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
      external: ['lit', 'lit-element'],
      output: {
        globals: {
          lit: 'lit',
          'lit-element': 'litElement',
        },
      },
    },
    minify: true,
  },
});
