import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets':  path.resolve(__dirname, './src/assets'),
      '@interfaces':  path.resolve(__dirname, './src/interfaces'),
      '@stores':  path.resolve(__dirname, './src/stores'),
      '@data':  path.resolve(__dirname, './src/data'),
    },
  }
})
