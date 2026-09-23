let productionInterval

export default {
  namespaced: true,
  state: {
    cookies: 0,
    cookiesPerSecond: 0,
  },
  getters: {
    doubleCookies: (state) => state.cookies * 2,
  },
  mutations: {
    addCookie(state) {
      state.cookies++
    },
    addCookies(state, count) {
      state.cookies += count
    },
    spendCookies(state, count) {
      state.cookies -= count
    },
  },
  actions: {
    addCookieWithDelay({ commit }) {
      setTimeout(() => {
        commit('addCookie')
      }, 1000)
    },
    startAutoProduction({ commit, rootGetters }) {
      if (productionInterval) return

      productionInterval = setInterval(() => {
        const cookiesPerSecond = rootGetters['upgrades/cookiesPerSecond']

        if (cookiesPerSecond > 0) {
          commit('addCookies', cookiesPerSecond)
        }
      }, 1000)
    },
    stopAutoProduction() {
      clearInterval(productionInterval)
      productionInterval = undefined
    },
  },
}
