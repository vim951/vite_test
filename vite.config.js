import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  root: './src',
  build: {
    outDir: '../build',
    assetsDir: '',
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      },
      input: {
        'main.jsx': './src/main.jsx'
      }
    }
  }
})
