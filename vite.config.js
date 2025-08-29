import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ecommerce-01/",   // 👈 IMPORTANT for GitHub Pages
});
