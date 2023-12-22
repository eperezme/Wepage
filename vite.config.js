import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { compression } from 'vite-plugin-compression2';
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // compression({ algorithm: 'brotliCompress'}),
    svgr(),
    imagetools(),
    react()
  ],
  server: {
    port: 3000
  },
  base: './'
})
