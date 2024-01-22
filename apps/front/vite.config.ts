import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

console.log(process.env.VITE_API_PATH)
export default defineConfig({
  plugins: [solid()],
});
