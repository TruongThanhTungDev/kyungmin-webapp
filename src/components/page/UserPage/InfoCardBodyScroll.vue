<template>
  <div class="w-full">
    <div
      class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4"
      @mousedown="startDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @mousemove="drag"
    >
      <info-card-body
        v-for="(item, index) in listInfo"
        :key="index"
        :light="require(`@/assets/image/img-body-${item}-light.png`)"
        :dark="require(`@/assets/image/img-body-${item}-dark.png`)"
        :class="{ 'block md:hidden': index === 6 }"
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
      listInfo: [1, 2, 3, 4, 5, 6, 7],
      isDragging: false,
      startX: 0,
      startY: 0,
      scrollLeft: 0,
      dragThreshold: 0,
      clickTimeout: null,
    };
  },
  methods: {
    startDrag(e) {
      this.isDragging = true;
      this.isClick = true;
      this.startX = e.pageX - e.currentTarget.offsetLeft;
      this.startY = e.pageY - e.currentTarget.offsetTop;
      this.scrollLeft = e.currentTarget.scrollLeft;
    },
    stopDrag(e) {
      if (this.isDragging) {
        this.isDragging = false;
        e.preventDefault();
        return;
      }
      if (this.isClick) {
        this.handleToRouter();
      }
    },
    drag(e) {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.pageX - e.currentTarget.offsetLeft;
      this.isDragging = true;
      const walk = (x - this.startX) * 2;
      if (Math.abs(walk) > this.dragThreshold) {
        this.isDragging = true;
        this.isClick = false;
        e.currentTarget.scrollLeft = this.scrollLeft - walk;
      }
    },
    handleToRouter() {
      this.toRouter();
    },
    toRouter() {
      if (!this.isDragging) {
        this.$router.push("");
      }
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
  cursor: grab;
}
.scroll-container::-webkit-scrollbar {
  display: none;
}
.scroll-container > * {
  flex: 0 0 auto;
}
.dragging {
  pointer-events: none;
}
</style>
