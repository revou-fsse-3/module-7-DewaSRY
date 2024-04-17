/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@common": fileURLToPath(new URL("./src/common", import.meta.url)),
      "@container": fileURLToPath(new URL("./src/container", import.meta.url)),
      "@http": fileURLToPath(new URL("./src/features/http", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/features/utils", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/features/hooks", import.meta.url)),
      "@query": fileURLToPath(new URL("./src/features/query", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/features/utils/setuptest.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
