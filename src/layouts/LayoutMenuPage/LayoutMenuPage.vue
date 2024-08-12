<template>
  <header-component></header-component>
  <main>
    <router-view></router-view>
  </main>
  <footer-component :class-name="'!bg-[#DBDADE]'"></footer-component>
</template>

<script>
import HeaderComponent from "@/components/Screens/HeaderComponent.vue";
import FooterComponent from "@/components/Screens/FooterComponent.vue";
export default {
  components: { HeaderComponent, FooterComponent },
  name: "LayoutMenuPage",
};
</script>

<style></style>
