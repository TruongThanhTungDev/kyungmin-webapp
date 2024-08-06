<template>
  <div class="relative">
    <div class="absolute z-20 container py-5 px-10 flex gap-6">
      <div class="w-[213px] cursor-pointer">
        <img src="@/assets/image/logo/logo.png" alt="" class="w-full" />
      </div>
      <div></div>
    </div>
    <div class="w-full h-[1048px] absolute z-1 top-0">
      <div class="header-background w-full h-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderHomePage",
};
</script>

<style scoped>
.header-background {
  background-image: url(https://cdn.imweb.me/thumbnail/20240619/abe272421ae94.png);
  background-color: #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
