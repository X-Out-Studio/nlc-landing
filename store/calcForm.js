import { defineStore } from "pinia";

export const useCalcFormStore = defineStore("calcForm", {
  state: () => ({
    openModal: false,
    currentStep: 1,
    phone: null,
    name: null,
    answers: {
      firstStep: null,
      firstStepBU: null,
      firstStepBUWaiting: false,
      secondStep: null,
      secondStepOther: null,
      secondStepOtherWaiting: false,
      thirdStep: null,
      fourthStep: null,
      fifthStep: null,
      sixthStep: null,
      seventhStep: null,
      fio: null,
      number: null,
    },
  }),
});
