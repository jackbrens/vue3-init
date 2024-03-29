import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteBuildInfo from './build/info'
import progress from 'vite-plugin-progress'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), progress(), viteBuildInfo()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 全局注入css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/variable.scss";',
      },
    },
  },
  server: {
    port: 3030,
    host: '0.0.0.0',
  },
})
