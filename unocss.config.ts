import presetWeapp, { colors, theme } from "unocss-preset-weapp";
import { transformerAttributify, transformerClass } from "unocss-preset-weapp/transformer";
import transformerDirectives from "@unocss/transformer-directives";

import { transformerVariantGroup, presetAttributify } from "unocss";
import { pxToVwPreset } from "./unocss/rpx2rem";
export default {
  presets: [presetWeapp(), pxToVwPreset()],
  shortcuts: [
    {
      "border-base": "border border-gray-500 border-solid",
      center: "flex justify-center items-center",
      "safe-bottom-height": "h-[env(safe-area-inset-bottom)]",
    },
  ],
  transformers: [transformerVariantGroup(), transformerAttributify(), transformerClass(), transformerDirectives()],
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}rpx` })], //m-1 ：{margin:1rpx}
    [/^m-l-([\.\d]+)$/, ([_, num]) => ({ "margin-left": `${num}rpx` })], //m-l-1 ：{margin-left:1rpx}
    [/^m-t-([\.\d]+)$/, ([_, num]) => ({ "margin-top": `${num}rpx` })], //m-t-1 ：{margin-top:1rpx}
    [/^m-r-([\.\d]+)$/, ([_, num]) => ({ "margin-right": `${num}rpx` })], //m-r-1 ：{margin-right:1rpx}
    [/^m-b-([\.\d]+)$/, ([_, num]) => ({ "margin-bottom": `${num}rpx` })], //m-b-1 ：{margin-bottom:1rpx}
    [/^mx-([\.\d]+)$/, ([_, num]) => ({ "margin-left": `${num}rpx`, "margin-right": `${num}rpx` })], //mx-1 ：{margin-left:1rpx ,margin-right:1rpx }
    [/^my-([\.\d]+)$/, ([_, num]) => ({ "margin-top": `${num}rpx`, "margin-bottom": `${num}rpx` })], //my-1 ：{margin-bottom:1rpx,margin-top:1rpx}
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}rpx` })], //p-1 ：{padding:1rpx}
    [/^p-l-([\.\d]+)$/, ([_, num]) => ({ "padding-left": `${num}rpx` })], //p-1 ：{padding:1rpx}
    [/^p-r-([\.\d]+)$/, ([_, num]) => ({ "padding-right": `${num}rpx` })], //p-1 ：{padding:1rpx}
    [/^p-t-([\.\d]+)$/, ([_, num]) => ({ "padding-top": `${num}rpx` })], //p-1 ：{padding:1rpx}
    [/^p-b-([\.\d]+)$/, ([_, num]) => ({ "padding-bottom": `${num}rpx` })], //p-1 ：{padding:1rpx}
    [/^px-([\.\d]+)$/, ([_, num]) => ({ "padding-left": `${num}rpx`, "padding-right": `${num}rpx` })], //p-1 ：{padding:1rpx}
    [/^py-([\.\d]+)$/, ([_, num]) => ({ "padding-top": `${num}rpx`, "padding-bottom": `${num}rpx` })], //p-1 ：{padding:1rpx}
    [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${num}rpx` })], //p-1 ：{padding:1rpx}
    [/^h-([\.\d]+)$/, ([_, num]) => ({ height: `${num}rpx` })], //p-1 ：{padding:1rpx}
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
