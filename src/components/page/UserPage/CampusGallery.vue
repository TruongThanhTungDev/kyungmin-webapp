<template>
  <div class="relative">
    <div class="bg-[#00274C] py-[54px] border-b-2 border-white">
      <p class="text-center text-white text-[28px]">
        <strong>Campus Gallery</strong>
      </p>
    </div>
    <div class="h-[807px] relative">
      <div class="background-campus-gallery">
        <div class="flex h-full w-4/5 my-0 mx-auto justify-between items-center">
          <img src="@/assets/image/campus.png" width="407" alt="">
          <gallery-album/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryAlbum from '@/components/GalleryAlbum.vue';
export default {
  components: { GalleryAlbum },
  name: "CampusGallery",
};
</script>

<style>
.background-campus-gallery {
  background-image: url(https://cdn.imweb.me/thumbnail/20240702/f1a23128d1ef8.png);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
}
</style>