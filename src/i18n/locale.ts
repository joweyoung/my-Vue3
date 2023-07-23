import { createI18n } from 'vue-i18n'
import message from './index'

const i18n = createI18n({
  locale: localStorage.lang || 'cn',
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: message
})

export default i18n
