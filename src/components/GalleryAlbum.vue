<template>
  <div class="text-white">
    <div class="block md:hidden">
      <div class="grid grid-cols-3 md:grid-cols-4 grid-rows-4 gap-1">
        <div
          v-for="item in 12"
          :key="item"
          :class="{
            'row-span-2 md:row-span-1 !h-full': [7, 9].includes(item),
            'col-span-2 ': item === 12,
          }"
          class="rounded-lg h-[80px] md:h-[150px]"
        >
          <img
            src="@/assets/image/gallery/gallery.jpg"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    <div class="w-full hidden md:block">
      <div class="grid grid-cols-3 md:grid-cols-4 grid-rows-4 gap-1">
        <div
          v-for="item in 13"
          :key="item"
          :class="{
            'md:row-span-2 !h-full': [8, 9].includes(item),
            'col-span-2 ': item === 13,
          }"
          class="rounded-lg h-[80px] md:h-[150px]"
        >
          <img
            src="@/assets/image/gallery/gallery.jpg"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryAlbum",
};
</script>

<style></style>
