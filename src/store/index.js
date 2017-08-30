import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'

import wantreport from './modules/wantreport'
import login from './modules/login'
import message from './modules/message'
import myreport from './modules/myreport'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    wantreport,
    myreport,
    login,
    message
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
