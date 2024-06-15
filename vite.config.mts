import eslintPlugin from '@nabla/vite-plugin-eslint';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import viteSvgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
  base: './',
  plugins: [
    react(),
    eslintPlugin(),
    viteSvgr(),
    tsconfigPaths(),
    TanStackRouterVite(),
    glsl()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
