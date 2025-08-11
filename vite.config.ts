import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT || env.PORT || "5173", 10),
      host: true, // needed for Docker container port mapping
      allowedHosts: ["67e96b72fb8e.ngrok-free.app"]
    },
    preview: {
      port: parseInt(env.VITE_PORT || env.PORT || "5173", 10),
      host: true,
    }
  };
});
