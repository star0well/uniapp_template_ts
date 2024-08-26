const pxRE = /(-?[\.\d]+)rpx/g;

// 处理apply postcss转换不了
export function pxToVwPreset(options = {
  isH5: false
}) {

  return {
    name: "@unocss/preset-rpx-to-rem",
    postprocess: (util) => {
      if (!options.isH5) return
      util.entries.forEach((i) => {
        const value = i[1];

        if (value && typeof value === "string" && pxRE.test(value))
          i[1] = value.replace(pxRE, (_, p1) => `${(p1 / 32)}rem`);
      });
    },
  };
}
