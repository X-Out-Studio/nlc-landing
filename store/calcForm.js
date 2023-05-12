import { defineStore } from 'pinia'

export const useCalcFormStore = defineStore('calcForm', {
  state: () => ({
    openModal: false,
    currentStep: 1,
    answers: {
      firstStep: null,
      secondStep: null,
    }
  }),

})
