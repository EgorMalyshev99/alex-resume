import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'vue-router/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: process.env.NODE_ENV === 'production' ? '/alex-cv/' : '/',
    server: {
      host: env.DEV_HOST,
      port: Number(env.DEV_PORT),
    },
    plugins: [VueRouter({ routesFolder: 'src/pages' }), vue(), vueDevTools(), tailwindcss(), ViteImageOptimizer()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
