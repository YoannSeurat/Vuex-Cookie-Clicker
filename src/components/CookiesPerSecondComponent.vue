<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cookiesPerSecond = computed(() => store.getters['upgrades/cookiesPerSecond'])
const formatNumber = (value) => new Intl.NumberFormat('fr-FR').format(value)
</script>

<template>
  <p>{{ formatNumber(cookiesPerSecond) }}</p>
</template>
