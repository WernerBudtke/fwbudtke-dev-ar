import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use a relative base so built assets work when served from GitHub Pages
  // (project pages are served under `https://<user>.github.io/<repo>/`).
  // Setting `base: './'` makes asset URLs relative to the current HTML file.
  base: './',
  plugins: [react()],
  server: {
    port: 5173
  },
})
