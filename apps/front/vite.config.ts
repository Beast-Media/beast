import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

console.log({
  __API_PORT__: process.env.FRONT_API_PORT,
})

export default defineConfig({
  plugins: [solid()],
  define: {
    __API_PORT__: process.env.FRONT_API_PORT,
  }
});
