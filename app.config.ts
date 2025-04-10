import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['tanstack-app-0fvh.onrender.com'],
  },
});
