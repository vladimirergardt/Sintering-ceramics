/**
 * Created by Ergardt.Vladimir on 23.01.2019.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import materials from './modules/materials.js'
import * as types from './mutation-types.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    materials,
  },
  state: {
    auth: {
      status: false,
      access: 'access denied'
    },
    materialsList: [],
  },
  getters: {
    getAuth(state) {
      return state.auth;
    },
  },
  mutations: {
    [types.SET_AUTH_USER] (state, payload) {
      state.auth.status = true;
      state.auth.access = payload;
    },
    [types.CLEAR_AUTH_USER] (state) {
      state.auth.status = false;
      state.auth.access = 'access denied';
    },
  },
  actions: {
    setAuth ({ commit }, body ) {
      return axios.post('/auth', body)
        .then((response) => {
          if (response.data.status) {
            localStorage.authAccess = 'access true';
            localStorage.authStatus = 'true';
            commit(types.SET_AUTH_USER, response.data.access);
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    clearAuth({ commit }) {
      localStorage.authStatus = false;
      localStorage.authAccess = 'access denied';
      commit(types.CLEAR_AUTH_USER);
    }
  },
})

export default store

