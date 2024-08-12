<template>
  <div class="card flex-1">
    <div class="text-xl font-bold">{{name}}</div>
    <div v-if="!isChild" class="flex justify-end gap-2">
      <div class="text-base description">View more</div>
      <img src="@/assets/image/icon/circle-right-arrow.png" width="30" alt="">
    </div>
    <div v-else>
      <div class="text-base description">수시모집 수시모집 수시모집수시모집</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardHeader',
  props: {
    name: {
      type: String,
      default: ''
    },
    isChild: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.card {
  color: white;
  background: #FFFFFF80;
  min-width: 224px;
  min-height: 125px;
  padding: 20px;
  transition: background-color 0.3s, margin-top 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card:hover {
  margin-top: -28px;
  background-color: rgba(35, 69, 87, 0.7);
  cursor: pointer;
}
img {
  transition: background-color 0.3s, border-radius 0.1s;
  border-radius: 50%;
}
.card:hover img {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}
.description {
  opacity: 0;
}
.card:hover .description{
  opacity: 1;
}
</style>