import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/benborba/",

  lang: "zh-CN",
  title: "奔波霸",
  description: "奔波霸的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
