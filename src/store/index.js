import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    // $store.commit('increase')
    increase(state) {
      state.count++;
    },
  },
  actions: {
    // api calls
    // commit('increase', response.data)
    // $store.dispatch('increase')
  },
  getters: {
    // $store.getters.functionName
  },
  modules: {},
});
