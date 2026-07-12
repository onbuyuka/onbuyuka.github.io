import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site on GitHub Pages: https://onbuyuka.github.io/
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
