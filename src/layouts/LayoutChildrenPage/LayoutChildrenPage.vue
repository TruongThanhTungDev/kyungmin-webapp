<template>
  <div>
    <div>
      <header-children-page></header-children-page>
      <main>
        <router-view></router-view>
      </main>
      <footer-children-page></footer-children-page>
    </div>
  </div>
</template>

<script>
import FooterChildrenPage from './FooterChildrenPage.vue';
import HeaderChildrenPage from './HeaderChildrenPage.vue';
export default {
  components: { HeaderChildrenPage, FooterChildrenPage },
  name: "LayoutChildrenPage",
};
</script>

<style>
</style>