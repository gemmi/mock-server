import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import api from './api'

const store = new Vuex.Store({
  modules: {
    api
  }
})

export default store
