<template>
  <div class="img-body-card cursor-pointer">
    <img class="img-light" :src="light" alt="">
    <img class="img-dark" :src="dark" alt="">
  </div>
</template>

<script>
export default {
  name: 'InfoCardBody',
  props: {
    light: {
      type: String,
      default: ''
    },
    dark: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>

<style>
.img-dark {
  display: none;
}
.img-body-card:hover .img-light {
  display: none;
  cursor: pointer;
}
.img-body-card:hover .img-dark {
  display: inline;
  cursor: pointer;
}
.img-body-card img {
  width: 187px;
  height: 187px;
}
.img-body-card {
  position: relative;
  flex: 0 0 auto;
  margin-right: 10px;
  user-select: none;
}
.img-body-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
}
</style>