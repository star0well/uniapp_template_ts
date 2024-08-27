import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { join } from "path";

// https://vitejs.dev/config/
export default async () => {
  const UnoCSS = (await import("unocss/vite")).default;
  return defineConfig({
    plugins: [uni(), UnoCSS()],
    resolve: {
      alias: {
        "@": join(__dirname, "src"),
      },
    },
  });
};
