import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({command}) => {
  const isBuild = command === 'build';
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    define: isBuild
      ? {
          'process.env.NODE_ENV': JSON.stringify('production'),
        }
      : undefined,
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('react-dom-client')) {
              return 'vendor-react-dom';
            }
            if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
              return 'vendor-react';
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        ...(isBuild
          ? {
              'react-dom/client': path.resolve(
                __dirname,
                'node_modules/react-dom/cjs/react-dom-client.production.js'
              ),
              'react-dom': path.resolve(
                __dirname,
                'node_modules/react-dom/cjs/react-dom.production.js'
              ),
              'react/jsx-runtime': path.resolve(
                __dirname,
                'node_modules/react/cjs/react-jsx-runtime.production.js'
              ),
              'react/jsx-dev-runtime': path.resolve(
                __dirname,
                'node_modules/react/cjs/react-jsx-runtime.production.js'
              ),
              react: path.resolve(
                __dirname,
                'node_modules/react/cjs/react.production.js'
              ),
              scheduler: path.resolve(
                __dirname,
                'node_modules/scheduler/cjs/scheduler.production.js'
              ),
            }
          : {}),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
