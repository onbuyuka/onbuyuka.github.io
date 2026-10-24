import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  server: {
    port: 4174,
    host: '127.0.0.1',
    strictPort: true,
  },
  plugins: [react()],
  preview: {
    port: 4175,
    host: '127.0.0.1',
    strictPort: true,
  },
});
