import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://www.recyclingmachine.xyz",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "de", // 设置默认语言为德语
    locales: ["en", "fr", "de"], // 确保包含德语
    fallback: {
      fr: "de", // 法语回退到德语
      en: "de", // 英语回退到德语
    },
    routing: {
      prefixDefaultLocale: false, // 根路径默认显示德语
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "de", // 站点地图默认德语
        locales: {
          en: "en",
          fr: "fr",
          de: "de",
        },
      },
    }),
    starlight({
      title: "Rumtoo Machinery",
      defaultLocale: "de", // 修改为德语默认
      locales: {
        root: { // 根路径内容为德语
          label: "Deutsch",
          lang: "de",
        },
        en: { label: "English", lang: "en" },
        fr: { label: "Français", lang: "fr" },
        es: { label: "Español", lang: "es" },
        fa: { label: "Persian", lang: "fa", dir: "rtl" },
        ja: { label: "日本語", lang: "ja" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Quick Start Guides",
          translations: {
            de: "Schnellstartanleitungen", // 德语翻译
            es: "Guías de Inicio Rápido",
            fa: "راهنمای شروع سریع",
            fr: "Guides de Démarrage Rapide",
            ja: "クイックスタートガイド",
            "zh-cn": "快速入门指南",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Advanced Topics",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: {
        github: "https://github.com/",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://www.recyclingmachine.xyz" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://www.recyclingmachine.xyz" + "/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercelStatic(),
});