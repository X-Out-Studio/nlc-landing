import { defineStore } from "pinia";

export const useFooterFormStore = defineStore("footerForm", {
  state: () => ({
    fio: null,
    phone: null,
    question: null,
  }),
});
