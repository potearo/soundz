import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isLibBuild = process.env.BUILD === 'true';

export default defineConfig({
  root: isLibBuild ? undefined : 'dev',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path  // optional; keeps '/api' unchanged
      }
    }
  },
  build: isLibBuild
    ? {
        lib: {
          entry: path.resolve(__dirname, 'index.ts'),
          name: 'Soundz',
          fileName: (format) => `index.${format}.js`,
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'howler', 'lucide-react'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              howler: 'Howler',
              'lucide-react': 'Lucide'
            },
            exports: 'named'
          }
        }
      }
    : undefined
});