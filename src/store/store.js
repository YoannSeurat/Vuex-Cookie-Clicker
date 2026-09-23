import { createStore } from 'vuex'
import cookies from './cookies.js'
import upgrades from './upgrades.js'

export default createStore({
  modules: {
    cookies,
    upgrades,
  },
})
