import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

// Deployed under the portfolio at /lbd/interview/ when BASE_PATH is set.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), glsl()],
  appType: 'spa',
})