import Vue from 'vue'
import Vuex from 'vuex'

import {getCurrencyList} from '../core/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyInfo: null
  },
  mutations: {
    setCurrencyInfo(state, payload) {
      state.currencyInfo = payload;
    }
  },
  actions: {
    async loadCurrencyList(context) {
      try {
        const currency = await getCurrencyList();
        context.commit('setCurrencyInfo', currency);
      }
      catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getValute(state) {
      return state.currencyInfo?.Valute;
    }
  },
  modules: {
  }
})
