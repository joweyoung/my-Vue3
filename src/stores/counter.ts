import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const double = computed(() => count.value * 3)
  function increment() {
    console.log('double', double.value)
    count.value++
  }
  return {
    count,
    double,
    increment
  }
  // getters: {
  //   double: (state) => state.count * 3
  // },
  // actions: {
  //   increment() {
  //     this.count++
  //   }
  // }
})
