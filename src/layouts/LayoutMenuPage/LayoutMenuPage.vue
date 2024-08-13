<template>
  <header-component :isScrolled="true"></header-component>
  <main>
    <router-view></router-view>
  </main>
  <hr class="w-full h-[3px] bg-[#00274c]" />
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
