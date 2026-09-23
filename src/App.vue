<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'

import Cookies from './components/CookiesComponent.vue'
import CookiesPerSecond from './components/CookiesPerSecondComponent.vue'
// import DoubleCookies from './components/DoubleCookiesComponent.vue'
import Upgrade from './components/UpgradeComponent.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('cookies/startAutoProduction')
})

onBeforeUnmount(() => {
  store.dispatch('cookies/stopAutoProduction')
})
</script>

<template>
  <h1>Cookie Clicker</h1>

  <div class="sticky">
    <div class="line center">
      <Cookies class="strong" />
      <p>cookies</p>
    </div>

    <div class="line center">
      <CookiesPerSecond />
      <p>cookies/seconde</p>
    </div>
  </div>

  <!--
  <div class="line hidden">
    <p>Le double de vos cookies :</p>
    <DoubleCookies></DoubleCookies>
  </div>

  <button class="hidden" @click="$store.dispatch('cookies/addCookieWithDelay')">Cuisiner</button>

  <button class="hidden" @click="$store.commit('cookies/addCookie')">
    Cuisiner instantanément
  </button>
  -->

  <img src="/cookie.png" alt="cookie" @click="$store.commit('cookies/addCookie')" />

  <br /><br />

  <Upgrade v-for="upgrade in $store.state.upgrades.upgrades" :key="upgrade.id" :upgrade="upgrade" />
</template>
