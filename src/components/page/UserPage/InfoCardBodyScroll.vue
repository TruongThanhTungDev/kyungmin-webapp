<template>
  <div class="w-full">
    <div
      class="scroll-container"
      @mousedown="startDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @mousemove="drag"
      @click="toRouter()"
    >
      <info-card-body
        v-for="item in listInfo"
        :key="item.key"
        :light="require(`@/assets/image/img-body-${item.key}-light.png`)"
        :dark="require(`@/assets/image/img-body-${item.key}-dark.png`)"
      />
    </div>
  </div>
</template>

<script>
import InfoCardBody from "../../InfoCardBody.vue";
export default {
  name: "InfoCardBodyScroll",
  components: { InfoCardBody },
  data() {
    return {
      listInfo: [
        {
          key: 1,
        },
        {
          key: 2,
        },
        {
          key: 3,
        },
        {
          key: 4,
        },
        {
          key: 5,
        },
        {
          key: 6,
        },
        {
          key: 7,
        },
      ],
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
    };
  },
  methods: {
    toRouter() {
      this.$router.push('')
    },
    startDrag(e) {
      this.isDragging = true;
      this.startX = e.pageX - e.currentTarget.offsetLeft;
      this.scrollLeft = e.currentTarget.scrollLeft;
    },
    stopDrag() {
      this.isDragging = false;
    },
    drag(e) {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.pageX - e.currentTarget.offsetLeft;
      const walk = (x - this.startX) * 2
      e.currentTarget.scrollLeft = this.scrollLeft - walk;
    },
  },
};
</script>

<style>
.scroll-container {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  white-space: nowrap;
}
.scroll-container:active {
  cursor: grabbing;
}
.scroll-container::-webkit-scrollbar {
  display: none;
}
.scroll-container > * {
  flex: 0 0 auto;
}
</style>