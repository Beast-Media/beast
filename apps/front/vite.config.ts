import { defineConfig } from "vite";
import { internalIpV4 } from "internal-ip";

import solid from "vite-plugin-solid";

const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);


console.log({
  __API_PORT__: process.env.FRONT_API_PORT,
})

export default defineConfig({
  plugins: [solid()],
  define: {
    __API_PORT__: process.env.FRONT_API_PORT,
  },
   // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: mobile ? "0.0.0.0" : false,
    hmr: mobile
      ? {
          protocol: "ws",
          host: await internalIpV4(),
          port: 1421,
        }
      : undefined,
  },
});