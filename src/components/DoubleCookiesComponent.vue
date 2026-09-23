<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const doublecookies = computed(() => store.getters['cookies/doubleCookies'])
</script>

<template>
  <p>{{ doublecookies }}</p>
</template>
