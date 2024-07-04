import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Optionally, configure Vite to ignore 404 errors for favicon.ico
    proxy: {
      '/favicon.ico': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        secure: false,
        logLevel: 'silent',
      },
    },
  },
  build: {
    outDir: 'dist', // Specify the output directory where Vite will place the bundled files
  },
});
