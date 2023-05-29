// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  modules: [
    'nuxt-swiper',
    '@pinia/nuxt',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '93715127',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      },
    ],
  ],
  plugins: [{ src: '@/plugins/aos', ssr: false, mode: 'client' }],
  app: {
    head: {
      title: 'Next Level Car',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
});
