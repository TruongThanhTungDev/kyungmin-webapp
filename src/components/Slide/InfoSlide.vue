<script>
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "SlidePreview",
  props: {
    "data-slide": { type: [String] },
    className: { type: String },
    config: { type: Object },
  },
  components: { Carousel, Slide },
  data() {
    return {
      settings: {
        autoplay: 2500,
        transition: 1200,
        lazyLoad: true,
        wrapAround: true,
        pauseAutoplayOnHover: true,
      },
      breakpoints: {
        320: {
          itemsToShow: 3,
        },
        768: {
          itemsToShow: 5,
        },
        1024: {
          itemsToShow: 5,
        },
        1900: {
          itemsToShow: 7,
          itemsToScroll: 2,
        },
      },
    };
  },
};
</script>

<template>
  <div>
    <carousel v-bind="settings" :breakpoints="config ? config : breakpoints">
      <slide v-for="(slide, index) in dataSlide" :key="index"
        ><div :class="className">
          <a-image
            :src="slide"
            alt="slide"
            class="!w-full !h-full !object-cover"
          /></div
      ></slide>
    </carousel>
  </div>
</template>

<style>
.carousel__slide {
  transition: transform 0.5s ease-in-out;
}
</style>
