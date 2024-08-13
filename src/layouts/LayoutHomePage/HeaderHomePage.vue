<template>
  <header-component
    :class-name="'!fixed bg-transparent'"
    :isScrolled="isScrolled"
    :isFixed="true"
  ></header-component>
  <div class="w-full header-background h-[850px]">
    <div class="w-full h-[570px]"></div>
    <div class="mx-auto xl:max-w-[1200px]">
      <card-header
        v-for="card in listCard"
        :key="card.name"
        :name="card.name"
      />
    </div>
  </div>
</template>

<script>
import CardHeader from "@/components/common/layout/CardHeader.vue";
import HeaderComponent from "@/components/Screens/HeaderComponent.vue";
export default {
  components: { CardHeader, HeaderComponent },
  name: "HeaderHomePage",
  data() {
    return {
      isScrolled: false,
      listCard: [
        {
          name: "수시모집",
          description: "",
          path: "",
        },
        {
          name: "모집요강",
          description: "",
          path: "",
        },
        {
          name: "학과안내",
          description: "",
          path: "",
        },
        {
          name: "장학금 안내",
          description: "",
          path: "",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const headerHeight = 200;
      if (scrollY > headerHeight) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
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

.header {
  background-color: transparent !important;
  transition: background-color 0.3s ease;
}
</style>
