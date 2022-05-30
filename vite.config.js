import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@routes': path.resolve(__dirname, './src/routes/routes.ts'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
