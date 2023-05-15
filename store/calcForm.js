import { defineStore } from 'pinia'

export const useCalcFormStore = defineStore('calcForm', {
  state: () => ({
    openModal: false,
    currentStep: 1,
    answers: {
      firstStep: null,
      secondStep: null,
      thirdStep: null,
      fourthStep: null,
      fifthStep: null,
      sixthStep: null,
      seventhStep: null,
      fio: null,
      number: null,
    }
  }),

})
