import api from '../../api'

import {
  LOAD_SUCCESS_REPORT,
  LOAD_FAILTURE_REPORT,
  SUCCESS_DELETE_REPORT,
  FAILTURE_DELETE_REPORT
} from '../types'
import {
  message,
  confirm
} from '../actions'
import {
  getStorage
} from '../../utils/authService'
const state = {
  reportList: [{
    effectiveTime: '',
    realName: '',
    phone: undefined,
    comName: '',
    comLicence: '',
    adArea: undefined,
    createTime: '',
    adStatus: undefined
  }]
}

const actions = {
  gadrecord({
    commit
  }, payload) {
    api.gadrecord(payload.loginId).then(response => {
      commit(LOAD_SUCCESS_REPORT, {
        reportList: response.data
      })
    }).catch((err) => {
      commit(LOAD_FAILTURE_REPORT)
      message({
        commit
      }, err.data.message || '加载报备信息失败', 'error')
    })
  },
  updtAdRecord(store, payload) {
    api.updtAdRecord(payload).then(response => {
      // store.commit(SUCCESS_DELETE_REPORT)
      message(store, '取消成功', 'success')
      store.dispatch('gadrecord', {
        loginId: JSON.parse(getStorage('loginInfo')).accountNo
      })
    }).catch((err) => {
      // store.commit(FAILTURE_DELETE_REPORT)
      message(store, err.data.message || '取消失败', 'error')
    })
  }
}

const mutations = {
  [LOAD_SUCCESS_REPORT](state, payload) {
    state.reportList = payload.reportList
  },
  [LOAD_FAILTURE_REPORT](state) {
    state.reportList = []
  }
}

export default {
  state,
  actions,
  mutations
}
