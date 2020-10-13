/*
 * @Author: vinc
 * @LastEditTime: 2020-10-13 09:07:34
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    title: '首页',
    userInfo:null,
    isLoading: false,
  },
  mutations: {
    SET_QUERY(state, payload) {
      state.query = payload
    },
    SET_USERINFO(state,payload) {
      state.userInfo = payload;
      localStorage.setItem('userInfo',JSON.stringify(payload))
    },
    REMOVE_USERINFO(state,payload) {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
    SET_TITLE(state,payload) {
        state.title = payload;
    }
  },
  actions: {
    async getInfo({ commit }, params){}
  }
})

export default store