import presetWeapp, { colors, theme } from "unocss-preset-weapp";
import {
  transformerAttributify,
  transformerClass,
} from "unocss-preset-weapp/transformer";
import transformerDirectives from "@unocss/transformer-directives";

import { transformerVariantGroup, presetAttributify } from "unocss";
import { pxToVwPreset } from "./unocss/rpx2rem";
export default {
  presets: [presetWeapp(), pxToVwPreset()],
  shortcuts: [
    {
      "border-base": "border border-gray-500_10",
      center: "flex justify-center items-center",
    },
  ],
  transformers: [
    transformerVariantGroup(),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
    transformerDirectives(),
    // presetIcons(),
  ],

  theme: {
    colors: {},
    fontSize: {
      xs: "24rpx",
      sm: "28rpx",
      md: "32rpx",
      lg: "36px",
      xl: "44px",
    },
  },
};
