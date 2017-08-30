import Vue from 'vue'
import VueResource from 'vue-resource'
import {
  getStorage,
  clearToken
} from '../utils/authService'
import router from '../router/index'

Vue.use(VueResource)

const API_ROOT = (process.env.NODE_ENV === 'production') ?
  // 'http://api.cadyd.com/' : 'http://192.168.3.222:10010'
'http://192.168.3.250:10010' : 'http://192.168.3.250:10010'
// Vue.http.options.root = API_ROOT
Vue.http.interceptors.push((request, next) => {
  let TOKEN = getStorage('token')
  if (TOKEN) {
    request.headers.set('token', TOKEN)
  }
  next((response) => {
    if (response) {
      switch (response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          clearToken()
          router.push('login')
      }
    }
    return response
  })
})

export const loginGroup = Vue.resource(API_ROOT + '/store/loginGroup')
export const addLiveAdrecord = Vue.resource(API_ROOT + '/live/addLiveAdrecord')
export const gadrecord = Vue.resource(API_ROOT + '/live/gadrecord')
export const updtAdRecord = Vue.resource(API_ROOT + '/live/updtAdRecord')
// export default {
//   API_ROOT
// }
