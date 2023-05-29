import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', {
  state: () => ({
    handlBack: 'https://nextlevelcar.ru/api/',
    endpoints: {
      captcha: 'check-captcha/',
      telegramSend: 'telegram-send/',
    },
  }),
});
