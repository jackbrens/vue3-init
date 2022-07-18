import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 全局注入css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/variable.scss";',
      },
    },
  },
  server: {
    port: 3030,
  },
})
