import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  server: {
    port: 4322,
    strictPort: true,
  },
});
