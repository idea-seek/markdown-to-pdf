import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          highlight: ['highlight.js'],
          katex: ['katex'],
          docx: ['docx'],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: [],
  },
});
