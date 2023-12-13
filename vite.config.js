import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { compression } from 'vite-plugin-compression2';
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // compression({ algorithm: 'brotliCompress'}),
    imagetools(),
    react()
  ],
  server: {
    port: 3000
  },
  base: './'
})
