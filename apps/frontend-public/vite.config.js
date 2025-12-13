import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: '0.0.0.0', // This allows external connections
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Adjust to your FastAPI server URL
        changeOrigin: true,
        secure: false,
      }
    }
  }
})  