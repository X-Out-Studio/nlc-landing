import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LcrKhkmAAAAAH-4ezPt75dv8D0Bdhmh3gRe4yd-',
    });
});