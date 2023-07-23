import http from '@/utils/axios/index'

export const login = (params: object | undefined) => {
  return http.post('/user/login', params)
}
