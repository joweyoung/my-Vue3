// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import zh_CN from './zh-CN'
import en from './en'

const message = {
  cn: {
    ...zh_CN
  },
  en
}
export default message

console.log('cmessagen', message)
