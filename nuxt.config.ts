// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  modules: ["nuxt-swiper", "@pinia/nuxt"],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
});
