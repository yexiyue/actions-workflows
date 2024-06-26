import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { lingui } from "@lingui/vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@lingui/swc-plugin", {}]],
    }),
    ,
    lingui(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "/actions-workflow",
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
