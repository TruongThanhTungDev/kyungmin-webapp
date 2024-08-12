<template>
  <a-layout class="relative">
    <HeaderHomePage></HeaderHomePage>
    <main>
      <router-view></router-view>
    </main>
    <FooterHomePage></FooterHomePage>
    <footer-component :class-name="'!bg-[#DBDADE]'"></footer-component>
  </a-layout>
</template>

<script>
import FooterHomePage from "./FooterHomePage.vue";
import FooterComponent from "@/components/Screens/FooterComponent.vue";
import HeaderHomePage from "./HeaderHomePage.vue";
export default {
  components: { HeaderHomePage, FooterComponent, FooterHomePage },
  name: "LayoutHomePage",
};
</script>

<style></style>
