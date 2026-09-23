<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cookies = computed(() => store.state.cookies.cookies)
const formatNumber = (value) => new Intl.NumberFormat('fr-FR').format(value)
</script>

<template>
  <p>{{ formatNumber(cookies) }}</p>
</template>
