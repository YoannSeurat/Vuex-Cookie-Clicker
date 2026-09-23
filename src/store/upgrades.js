export default {
  namespaced: true,
  state: {
    upgrades: [
      {
        id: 1,
        name: 'Thermomix',
        description: 'Un robot cuiseur basique pour vous aider',
        cost: 30,
        cookiesPerSecond: 1,
        count: 0,
      },
      {
        id: 2,
        name: 'Amateur de cuisine',
        description: 'Un commis de cuisine amateur qui travaille à votre place',
        cost: 75,
        cookiesPerSecond: 3,
        count: 0,
      },
      {
        id: 3,
        name: 'Cuisinier professionnel',
        description: 'Philippe Etchebest en personne dans votre cuisine',
        cost: 200,
        cookiesPerSecond: 12,
        count: 0,
      },
      {
        id: 4,
        name: 'Robot cuisinier dernier cri',
        description:
          'Du matos de compétition qui vous donne un avantage non négligeable sur la compétition',
        cost: 1000,
        cookiesPerSecond: 75,
        count: 0,
      },
      {
        id: 5,
        name: 'La terre entière',
        description:
          'Littéralement toute la population de la terre (ou presque) sous votre commande pour cuisiner des cookies',
        cost: 100000,
        cookiesPerSecond: 500,
        count: 0,
      },
      {
        id: 6,
        name: 'Bernard Arnault',
        description: '',
        cost: 1000000000,
        cookiesPerSecond: 10000,
        count: 0,
      },
    ],
  },
  getters: {
    upgradeInfo: (state) => (id) => state.upgrades.find((upgrade) => upgrade.id === id),
    cookiesPerSecond: (state) =>
      state.upgrades.reduce(
        (total, upgrade) => total + upgrade.cookiesPerSecond * upgrade.count,
        0,
      ),
  },
  mutations: {
    addUpgrades(state, { id, count }) {
      const upgrade = state.upgrades.find((upgrade) => upgrade.id === id)
      upgrade.count += count
    },
  },
  actions: {
    buyUpgrades({ commit, rootState }, { id, count = 1 }) {
      const upgrade = rootState.upgrades.upgrades.find((upgrade) => upgrade.id === id)
      const totalCost = upgrade.cost * count

      if (rootState.cookies.cookies < totalCost) return false

      commit('addUpgrades', { id, count })
      commit('cookies/spendCookies', totalCost, { root: true })
      return true
    },
  },
}
