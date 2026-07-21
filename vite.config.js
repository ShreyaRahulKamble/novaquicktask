import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/novaquicktask/',
  plugins: [react()],
  build: { outDir: 'dist' }
})