import api from '../../api'
import router from '../../router/index'
import {
  saveStorage
} from '../../utils/authService'
import {
  LOGIN_SUCCESS
} from '../types'
import {
  message
} from '../actions'
const state = {
  loginInfo: {
    accountNo: '',
    pwd: 0,
    rolegroup: 2
  }
}

const actions = {
  loginGroup({
    commit
  }, loginInfo) {
    api.loginGroup(loginInfo).then(response => {
      saveStorage('loginInfo', JSON.stringify(loginInfo))
      saveStorage('token', response.data.token)
      // saveStorage('loginId', loginInfo.accountNo)
      message({commit}, '登录成功', 'success')
      router.push('/')
    }).catch((err) => {
      message({commit}, err.data.message || '登录失败', 'error')
    })
  }
}

const mutations = {
  [LOGIN_SUCCESS](state, payload) {
    state.loginInfo = payload.loginInfo
  }
}

export default {
  state,
  actions,
  mutations
}
