<template>
  <a class="card-plus-container flex-1" :href="path">
    <div class="font-bold text-xl card-plus">
      <div class="w-[55%]">
        {{title}}
      </div>
      <i class="fa-solid fa-plus"></i>
    </div>
  </a>
</template>

<script>
export default {
  name: 'InfoCardBodyPlus',
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.card-plus-container {
  background: white;
  height: 88px;
}
.card-plus {
  background: #00274c;
  padding: 16px;
  color: white;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.card-plus-container:hover .card-plus {
  background: white;
  color: #00274c;
  cursor: pointer;
}
.card-plus-container:hover {
  background: #00274c;
  cursor: pointer;
}
.card-plus-container:hover i {
  color: white;
}
</style>