import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // GitHub Pages는 https://<계정>.github.io/react-study/ 하위 경로로 서빙되므로
  // 빌드 산출물의 에셋 경로 기준을 맞춰줘야 함 (개발 서버에는 영향 없음)
  base: process.env.NODE_ENV === 'production' ? '/react-study/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})
