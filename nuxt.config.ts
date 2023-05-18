// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  modules: ["nuxt-swiper", "@pinia/nuxt"],
  runtimeConfig: {
    handlBack: "http://localhost:7777/api/",
    endpoints: {
      captcha: "check-captcha/",
      telegramSend: "telegram-send/",
    },
  },
});
