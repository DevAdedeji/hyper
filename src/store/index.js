import { createStore } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default createStore({
  state:{
    endpoint: process.env.VUE_APP_ENDPOINT,
    user: null,
    token: null,
  },
  actions,
  getters,
  mutations,
})
