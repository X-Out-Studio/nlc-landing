import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => ({
    handlBack: "http://localhost:3051/api/",
    endpoints: {
      captcha: "check-captcha/",
      telegramSend: "telegram-send/",
    },
  }),
});
