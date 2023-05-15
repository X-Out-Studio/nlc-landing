import { defineStore } from 'pinia'

export const useModalStepsStore = defineStore('modalSteps', {
  state: () => ({
    openModal: false,
  }),

})
