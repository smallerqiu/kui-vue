import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue' // for vue3
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import vitePluginMd from './src/plugins/vite-plugin-md.js'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vitePluginMd(),
    vueJsx(),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/'),
      'kui-vue': path.resolve(__dirname, '/components'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    outDir: 'docs', // default: dist
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash][extname]'
          }
          if (
            assetInfo.name &&
            /\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(assetInfo.name)
          ) {
            return 'img/[name]-[hash][extname]'
          }
          if (assetInfo.name && /\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
