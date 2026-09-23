<script>
const numberFormatter = new Intl.NumberFormat('fr-FR')

export default {
  props: {
    upgrade: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatNumber(value) {
      return numberFormatter.format(value)
    },
  },
}
</script>

<template>
  <div class="upgrade">
    <div>
      <div class="line">
        <p>{{ formatNumber(upgrade.count) }}</p>
        <h3>{{ upgrade.name }}</h3>
      </div>
      <p>{{ upgrade.description }}</p>
      <p>+ {{ formatNumber(upgrade.cookiesPerSecond) }} cookies/seconde</p>
      <p>Coût: {{ formatNumber(upgrade.cost) }} cookies</p>
    </div>
    <div class="line center">
      <button @click="$store.dispatch('upgrades/buyUpgrades', { id: upgrade.id, count: 1 })">
        Acheter 1
      </button>
      <button @click="$store.dispatch('upgrades/buyUpgrades', { id: upgrade.id, count: 5 })">
        Acheter 5
      </button>
      <button @click="$store.dispatch('upgrades/buyUpgrades', { id: upgrade.id, count: 10 })">
        Acheter 10
      </button>
    </div>
  </div>
</template>
