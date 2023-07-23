import { ref } from 'vue'

const useAdd = () => {
  const addNum = ref(1)

  const addFn = (num1: number, num2: number) => {
    addNum.value = num1 + num2
  }
  return {
    addNum,
    addFn
  }
}
export { useAdd }
