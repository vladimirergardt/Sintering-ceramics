/**
 * Created by Ergardt.Vladimir on 23.01.2019.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    auth: {
      status: false,
      access: 'access denied'
    },
  },
  getters: {},
  actions: {},
  mutations: {}
})

export default store

