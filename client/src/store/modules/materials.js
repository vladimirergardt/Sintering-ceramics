/**
 * Created by Ergardt.Vladimir on 26.01.2019.
 */

import axios from 'axios';
import * as types from '../mutation-types';

import { createParams, createParamsUpdate } from '../../utils/utils.js';

const materials = {
  state: {
    materialsList: [],
    currentMaterial: {},
  },
  getters: {
    materialsList(state) {
      return state.materialsList;
    },
    currentMaterial(state) {
      return state.currentMaterial;
    },
  },
  mutations: {
    [types.SET_MATERIALS_LIST] (state, payload) {
      state.materialsList = payload;
    },
    [types.SET_CURRENT_MATERIAL] (state, payload) {
      state.currentMaterial = payload;
    },
    // todo: clear current material (если id = new)
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
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    addMaterial({}, amount) {
      const body = createParams(amount);
      return axios.post('/addMaterial', body)
        .then(response => {

        })
        .catch(err => {
          console.log(err);
        })
    },
    getMaterial({ commit }, amount) {
      const body = { id: amount };
      return axios.post('/getMaterial', body)
        .then( response => {
          const payload = response.data.data;
          commit(types.SET_CURRENT_MATERIAL, payload);
        })
        .catch(err => {
          console.log(err);
        })
    },
    updateMaterial({}, amount) {
      const body = createParamsUpdate(amount);
      return axios.post('/updateMaterial', body)
        .then(response => {})
        .catch(err => {
          console.log(err);
        })
    },
  }
}

export default materials
