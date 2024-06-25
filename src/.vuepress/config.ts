import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/benborba/",

  lang: "zh-CN",
  title: "JavaScript进阶之路",
  description: "JavaScript进阶之路",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
