import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/allianz-group-website/',
  build: {
    env: {
      VITE_EMAIL_SERVICE_ID: process.env.VITE_EMAIL_SERVICE_ID,
      VITE_EMAIL_TEMPLATE_ID: process.env.VITE_EMAIL_TEMPLATE_ID,
      VITE_EMAIL_PUBLIC_KEY: process.env.VITE_EMAIL_PUBLIC_KEY
    },
  },
});
