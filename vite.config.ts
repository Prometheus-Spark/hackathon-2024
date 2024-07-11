import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { host: true },
  resolve: {
    alias: {
      "@root": "/src",
      "@features": "/src/features",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
    },
  },
});
