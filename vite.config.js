
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  envPrefix: ['VITE_', 'CHESS_'],

  preview: {
    allowedHosts: [
      'tournament.adityauniversity.in',
      'https://tournament.adityauniversity.in',
      'www.tournament.adityauniversity.in'
    ]
  }
})
