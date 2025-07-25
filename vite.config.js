import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Dark-Light-Mode-Learning-React/', // 👈 adăugat pentru GitHub Pages
  plugins: [react(), tailwindcss()],
})
