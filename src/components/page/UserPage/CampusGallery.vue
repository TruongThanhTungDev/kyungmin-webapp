<template>
  <div class="relative">
    <div class="bg-[#00274C] py-[54px] border-b-2 border-white">
      <p class="text-center text-white text-[28px]">
        <strong>Campus Gallery</strong>
      </p>
    </div>
    <div class="h-[807px]">
      <div class="background-campus-gallery">
        <div class="mx-auto w-full xl:max-w-[1200px] pt-[110px]">
          <div class="grid grid-cols-1 md:grid-cols-12">
            <div class="col-span-1 md:col-span-4">
              <img
                src="@/assets/image/campus.png"
                width="407"
                alt=""
                class="hidden lg:block"
              />
            </div>
            <div class="col-span-1 px-4 md:col-span-8 md:pl-[120px]">
              <gallery-album />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryAlbum from "@/components/GalleryAlbum.vue";
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
  height: 100%;
  width: 100%;
}
</style>
