<template>
  <div class="gallery-container text-white">
    <div class="grid grid-cols-4 grid-rows-4 gap-1">
      <div v-for="item in 13" :key="item" :class="item === 8 || item === 9 ? 'row-span-2 w-[210px]' : item === 13 ? 'col-span-2 w-[423px] h-[158px]' : 'w-[210px]'" class="rounded-lg">
        <img src="@/assets/image/gallery/gallery.jpg" class="w-full h-full object-cover rounded-lg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryAlbum'
}
</script>

<style>
.gallery-container {
  height: 587px;
  max-height: 587px;
}
</style>