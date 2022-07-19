import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteBuildInfo from './build/info'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteBuildInfo()],
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
