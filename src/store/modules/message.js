import {
  SHOW_CONFIRM,
  SHOW_MESSAGE
} from '../types'

const state = {
  message: {
    content: '',
    title: '',
    type: ''
  },
  confirm: {
    content: '',
    title: '',
    type: '',
    handle: Function
  }
}

const mutations = {
  [SHOW_CONFIRM](state, payload) {
    state.confirm = { ...payload }
  },
  [SHOW_MESSAGE](state, payload) {
    state.message = { ...payload }
  }
}

export default {
  state,
  mutations
}
