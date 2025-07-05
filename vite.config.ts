import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT || env.PORT || "5173", 10),
      host: true, // Allows access from other devices on the network
    },
    preview: {
      port: parseInt(env.VITE_PREVIEW_PORT || env.PREVIEW_PORT || "4173", 10),
      host: true,
      strictPort: true, // Exit if port is already in use
      // Optional: Proxy API calls in preview mode
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        }
      }
    }
  };
});