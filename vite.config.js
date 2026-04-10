import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    origin: 'http://localhost:3000'
  }
});
