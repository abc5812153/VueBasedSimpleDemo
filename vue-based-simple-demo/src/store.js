import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: function (state) {
      console.log(`mutations say: increment`)
      state.count++
    },
    reduce: function (state) {
      console.log(`mutations say: reduce`)
      state.count--
    }
  },
  actions: {
    asyncIncrement(context) {
      setTimeout(() => {
        console.log(`actions say: increment`)
        context.commit('increment')
        return true
      }, 1000)
    },
  },
  getters: {
    double: (state) => {
      console.log(`getters say: double`)
      return state.count * 2
    }
  }
})
