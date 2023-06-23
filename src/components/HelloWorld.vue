<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

defineProps<{
  msg: string
}>()

const val = ref('你好')
const countNew = ref(1)
const { double } = storeToRefs(store)

let stopWatch = watchEffect(() => {
  console.log(double.value)
  if (countNew.value > 100) {
    ElMessage.success(`count已超过100`)
    stopWatch()
  }
})
console.log('storeToRefs', store.count, double)

onMounted(() => {
  countNew.value = countNew.value * 2
})
const doubleCount = () => {
  countNew.value = countNew.value * 2
}
const computedCount = computed(() => countNew.value * 3)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>{{ val }}</h2>
    <el-button type="primary" @click="doubleCount">相乘</el-button>
    <div class="result-line">
      <span>结果：</span> <span :class="[countNew > 100 ? 'red' : 'green']">{{ countNew }}</span>
      <span>computedCount：{{ computedCount }}</span>
    </div>
    <el-button type="warning" @click="store.increment">相乘（store）</el-button>
    <div>{{ double }}</div>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped lang="less">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.result-line {
  span {
    color: @theme;
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
