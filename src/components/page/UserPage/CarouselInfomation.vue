<template>
  <section class="w-full h-[622px] relative">
    <carousel
      ref="carousel"
      :items-to-show="1"
      :autoplay="3500"
      :transition="300"
      :wrapAround="true"
      :pauseAutoplayOnHover="true"
      :pagination="{ clickable: true }"
      class="relative"
    >
      <slide v-for="(item, index) in dataBanner" :key="index"
        >
        <div class="w-full h-[622px] relative">
          <img
            :src="item.slide"
            alt="slide"
            class="w-full h-full object-cover"
          />
          <img :src="item.description" width="550" class="absolute top-[55%] right-0 z-1 -translate-y-1/2">
        </div>
      </slide>
    </carousel>
    <div @click="prev" class="absolute top-1/2 left-4 w-[30px] h-[30px] rounded-full border border-white flex justify-center items-center cursor-pointer">
      <i class="fa-solid fa-chevron-left text-white text-xl"></i>
    </div>
    <div @click="next" class="absolute top-1/2 right-4 w-[30px] h-[30px] rounded-full border border-white flex justify-center items-center cursor-pointer">
      <i class="fa-solid fa-chevron-right text-white text-xl"></i>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "CarouselInformation",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      dataBanner: [
        {
          slide: 'https://cdn.imweb.me/thumbnail/20240701/e093ddfbddad4.png',
          description: 'https://cdn.imweb.me/upload/S202307054e561628b31ed/a6547c4041115.png'
        },
        {
          slide: 'https://cdn.imweb.me/thumbnail/20240701/3b0541f7b58e2.jpg',
          description: 'https://cdn.imweb.me/upload/S202307054e561628b31ed/255d2285fcfeb.png'
        },
        {
          slide: 'https://cdn.imweb.me/thumbnail/20240708/747b7f75f850b.png',
          description: 'https://cdn.imweb.me/upload/S202307054e561628b31ed/2fcdc69fc4850.png'
        },
        {
          slide: 'https://cdn.imweb.me/thumbnail/20240701/ac1073b62c6f3.png',
          description: 'https://cdn.imweb.me/upload/S202307054e561628b31ed/3a0107da4f786.png'
        }
      ]
    }
  },
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  }
};
</script>

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.anticon-left-circle,
.anticon-right-circle {
  font-size: 30px !important;
}
:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>