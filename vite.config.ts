import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Use a relative base so built assets work when served from GitHub Pages
  // (project pages are served under `https://<user>.github.io/<repo>/`).
  // Setting `base: './'` makes asset URLs relative to the current HTML file.
  base: './',
  plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), react(), tailwindcss()],
  server: {
    port: 5173,
  },
});
