<template>
  <header-component></header-component>
  <main>
    <router-view></router-view>
  </main>
  <footer-children-page></footer-children-page>
</template>

<script>
import FooterChildrenPage from "./FooterChildrenPage.vue";
import HeaderComponent from "../../components/Screens/HeaderComponent.vue";
export default {
  components: { HeaderComponent, FooterChildrenPage },
  name: "LayoutChildrenPage",
};
</script>

<style></style>
