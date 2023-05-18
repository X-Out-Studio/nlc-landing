import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => ({
    handlBack: "http://localhost:7777/api/",
    endpoints: {
      captcha: "check-captcha/",
      telegramSend: "telegram-send/",
    },
  }),
});
