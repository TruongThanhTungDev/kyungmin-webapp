<template>
  <div>
    <section class="bg-[#00274C] py-[54px]">
      <p class="text-center text-white text-[28px]">
        <strong>Media Contents</strong>
      </p>
      <div class="mx-auto w-full xl:max-w-[1200px] px-4 lg:px-0">
        <a href="https://www.youtube.com/channel/UCLqQRb5ba7ZKRlt0twQExmA">
          <div class="view-more">
            <div class="text-[12px]">View More</div>
            <div class="view-more-button">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </a>
      </div>
      <div class="w-full h-[1px] bg-white my-3"></div>
      <div
        class="mx-auto w-full xl:max-w-[1200px] mt-[49px] mb-[40px] px-4 xl:px-0"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0">
          <div v-for="(item, index) in listMedia" :key="index">
            <p class="text-center text-white h-[40px]">
              <strong>{{ item.title }}</strong> {{ item.sub }}
            </p>
            <LiteYouTubeEmbed
              :id="item.videoId"
              :title="item.title"
              ref="iframe"
            ></LiteYouTubeEmbed>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
export default {
  name: "MediaContents",
  components: {
    LiteYouTubeEmbed,
  },
  data() {
    return {
      listMedia: [
        {
          title: "[전과자]",
          sub: "소방관이 알려주는 신박한 불끄는 법",
          videoId: "sgu4TiNucEs",
        },
        {
          title: "[경민대졸업한선배들]",
          sub: "소방안전관리과 편",
          videoId: "sgu4TiNucEs",
        },
        {
          title: "[2023]",
          sub: "New era, New you",
          videoId: "sgu4TiNucEs",
        },
      ],
    };
  },
};
</script>

<style>
.view-more {
  color: white;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: end;
  cursor: pointer;
}
.view-more-button {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00274c;
  background: white;
  border-radius: 50%;
}
.view-more:hover .view-more-button {
  color: white;
  background: none;
  border: 1px solid white;
  cursor: pointer;
}
</style>