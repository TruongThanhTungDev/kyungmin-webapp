<template>
  <header-component></header-component>
  <main>
    <router-view></router-view>
  </main>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/Screens/HeaderComponent.vue";
import FooterComponent from "@/components/Screens/FooterComponent.vue";
export default {
  components: { HeaderComponent, FooterComponent },
  name: "LayoutChildrenPage",
};
</script>

<style></style>
