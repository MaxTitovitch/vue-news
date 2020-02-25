import Vue from 'vue'
import Vuex from 'vuex'
import news from './news'
import user from './user'
import colorScheme from './colorScheme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    colorScheme,
    news,
    user
  }
})
