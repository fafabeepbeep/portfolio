import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration.
// NOTE for GitHub Pages users: if you deploy to https://USERNAME.github.io/REPO/
// you must set base to "/REPO/" (with the slashes). See README.md.
export default defineConfig({
  plugins: [react()],
  base: "./", // safe default that works on Vercel, Render, and local preview
});
