import api from '../../api'
import {
  SUCCESS_REPORT,
  FAILTURE_REPORT
} from '../types'
import {
  message
} from '../actions'
import router from '../../router/index'
const state = {

}

const actions = {
  addLiveAdrecord({
    commit
  }, payload) {
    api.addLiveAdrecord(payload).then(response => {
      commit(SUCCESS_REPORT)
      message({
        commit
      }, response.data.message || '报备成功', 'success')
      router.push('myreport')
    }).catch((err) => {
      commit(FAILTURE_REPORT)
      message({
        commit
      }, err.data.message || '报备失败', 'error')
    })
  },
  openMessage({
    commit
  }, state) {
    if (!state) {
      message({
        commit
      }, '请根据提示填写正确信息', 'error')
    }
  }
}

const mutations = {
  [SUCCESS_REPORT](state) {

  },
  [FAILTURE_REPORT](state) {}
}

export default {
  state,
  actions,
  mutations
}
