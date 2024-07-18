import { fileURLToPath, URL } from 'node:url'

import { defineConfig, mergeConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
// import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  const baseConfig = {
    base: '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [react()],
    preview: {
      port: 8888,
      host: '0.0.0.0'
    }
  }

  if (!isProd) {
    return mergeConfig(baseConfig, {
      server: {
        port: 8080,
        host: '0.0.0.0'
      }
    })
  }

  return mergeConfig(baseConfig, {
    plugins: [legacy()]
  })
})
