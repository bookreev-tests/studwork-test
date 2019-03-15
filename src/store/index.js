import Vue from 'vue'
import Vuex from 'vuex'

import starships from './modules/starships'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    starships
  }
})

export default store
