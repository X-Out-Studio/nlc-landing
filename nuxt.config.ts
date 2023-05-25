// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  modules: [
    "nuxt-swiper",
    "@pinia/nuxt",
    [
      "yandex-metrika-module-nuxt3",
      {
        id: "93635804",
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        ecommerce: "dataLayer",
      },
    ],
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
});
