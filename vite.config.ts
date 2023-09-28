import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      cors: true,
      headers: {
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Methods": "*",
      },
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve("./src"),
        },
      ],
    },

    base:
      mode === "development"
        ? ""
        : "https://lcsubappassets.oss-cn-guangzhou.aliyuncs.com/micro/",
  };
});
