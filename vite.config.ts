import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['react-animation-on-scroll'],
          'form-vendor': ['react-hook-form'],
          'typed-vendor': ['react-typed'],
          'email-vendor': ['@emailjs/browser'],
          'utils-vendor': ['classnames']
        }
      }
    },
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    // Otimizações para browsers modernos
    target: 'esnext',
    cssCodeSplit: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-hook-form', 'react-typed']
  },
  // Otimizações de performance
  esbuild: {
    target: 'esnext',
    format: 'esm'
  },
  // Excluir scripts do build
  publicDir: 'public',
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.svg'],
  // Ignorar pasta scripts no build
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
})
