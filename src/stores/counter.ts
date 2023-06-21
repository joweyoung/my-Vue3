import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1
  }),
  getters: {
    double: (state) => state.count * 3,
  },
  actions: {
    increment() {
      this.count++;
    }
  }
})
