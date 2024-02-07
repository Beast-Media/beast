import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

console.log({
  __API_PORT__: process.env.API_PORT,
  __API_WS_PORT__: process.env.API_WS_PORT
})

export default defineConfig({
  plugins: [solid()],
  define: {
    __API_PORT__: process.env.API_PORT,
    __API_WS_PORT__: process.env.API_WS_PORT
  }
});
