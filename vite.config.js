import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the built site work on Vercel AND GitHub Pages
// (including project pages like username.github.io/portfolio/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
