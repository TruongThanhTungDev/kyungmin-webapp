<template>
  <a-layout class="relative">
    <HeaderHomePage></HeaderHomePage>
    <main>
      <router-view></router-view>
    </main>
    <FooterHomePage></FooterHomePage>
  </a-layout>
</template>

<script>
import FooterHomePage from './FooterHomePage.vue'
import HeaderHomePage from './HeaderHomePage.vue'
export default {
  components: { HeaderHomePage, FooterHomePage },
  name: 'LayoutHomePage'
}
</script>

<style>

</style>