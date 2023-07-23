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
    <el-button type="primary" @click="getUserMedia">调取浏览器媒体权限</el-button>
    <h2>{{ transNum.sumStr }}</h2>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>

    <el-button @click="show = !show">Toggle</el-button>
    <Transition name="slide-fade">
      <div v-if="show">
        <p>hello</p>
      </div>
      <div v-else></div>
    </Transition>
    <div>{{ $t('axios.success') }}</div>
    <el-switch
      v-model="language"
      size="large"
      :active-text="$t('lang.zh')"
      :inactive-text="$t('lang.en')"
      @change="changeLang"
    />
  </div>
</template>

<script setup lang="ts">
import { quickSort } from '@joeyyang94/my-quicksort-org'

import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '@/stores/counter'
import { thousandTans } from '@/hooks/components/transThousand'
import { login } from '@/apis/api'

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
let media = null

onMounted(async () => {
  const params = {
    name: 'joey',
    password: '123'
  }
  countNew.value = countNew.value * 2
  try {
    const data = await login(params)
    console.log('data', data)
  } catch (err) {
    ElMessage.success(t('tip.network_error'))
  }
  // this.media =
  media = navigator.mediaDevices.getUserMedia

  const sortArr = quickSort([5, 33, 3, 22, 1])
  console.log('sortArr', sortArr)
})
const doubleCount = () => {
  countNew.value = countNew.value * 2
}
const computedCount = computed(() => countNew.value * 3)

// 调用用户多媒体信息
function getUserMedia() {
  if (media) {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
      console.log('stream', stream)
    })
  }
}
/*************** 自定义指令 ***************/
// const vTrans = {
//   mounted(el, binding) {
//     console.log(el.value, binding)
//     return thousandTans(binding.value)
//   },
// }
const transNum = computed(() => {
  return thousandTans(countNew.value)
})

const show = ref(false)

const { t, locale } = useI18n()
console.log('useI18n', t('axios.success'))
const language = ref(true)
const changeLang = (lang) => {
  locale.value = lang ? 'cn' : 'en'
}
</script>

<style scoped lang="less">
/* 下面我们会解释这些 class 是做什么的 */
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

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
