import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
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
