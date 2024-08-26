import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { join } from "path";
import VueI18n from "@intlify/unplugin-vue-i18n/vite";
import path from "node:path";

// https://vitejs.dev/config/
export default async () => {
  const UnoCSS = (await import("unocss/vite")).default;
  return defineConfig({
    plugins: [
      uni(),
      UnoCSS(),
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        // include: [path.resolve(__dirname, "locales/**")],
      }),
    ],
    resolve: {
      alias: {
        "@": join(__dirname, "src"),
        // "@/": "/src",
      },
    },
  });
};
