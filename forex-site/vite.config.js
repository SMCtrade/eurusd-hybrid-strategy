import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration tailored for the Forex Assistant site.
// See https://vitejs.dev/config/ for more details on the available options.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
