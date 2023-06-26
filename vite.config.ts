import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    modulePreload: false,
  },
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        'cha': "http://localhost:4173/assets/widgets.js",
      },
      shared: ['react', 'react-dom', '@tanstack/react-query']
  })
  ],
})
