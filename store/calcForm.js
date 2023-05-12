import { defineStore } from 'pinia'

export const useCalcFormStore = defineStore('calcForm', {
  state: () => ({
    answers: {
      firstStep: null,
      secondStep: null,
    }
  }),

})
