/**
 * Created by Ergardt.Vladimir on 26.01.2019.
 */

import axios from 'axios';
import * as types from '../mutation-types';

const materials = {
  state: {
    materialsList: [],
  },
  getters: {
    materialsList(state) {
      return state.materialsList;
    },
  },
  mutations: {
    [types.SET_MATERIALS_LIST] (state, payload) {
      state.materialsList = payload;
    },
  },
  actions: {
    getMaterialsList({ commit }) {
      return axios.post('/getMaterials')
        .then(response => {
          const payload = response.data.data;
          commit(types.SET_MATERIALS_LIST, payload);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deleteMaterial({}, amount) {
      const body = { id: amount}
      return axios.post('/deleteMaterial', body)
        .then(response => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
}

export default materials
