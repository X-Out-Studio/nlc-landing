import { defineStore } from 'pinia'

export const useModalStepsStore = defineStore('modalSteps', {
  state: () => ({
    openModal: false,
    done: false,
    name: null,
    phone: null
  }),
});
