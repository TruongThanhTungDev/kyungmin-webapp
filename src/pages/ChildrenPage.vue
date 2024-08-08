<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  name: "ChildrenPage",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    LiteYouTubeEmbed,
  },
  data() {
    return {
      dataCard: [
        {
          title: "소방공무원",
          description: "배출 전국 1등!",
          content: "100학점 이상의 전문학점으로 4년간 공부",
        },
        {
          title: "소방공무원",
          description: "배출 전국 1등!",
          content: "100학점 이상의 전문학점으로 4년간 공부",
        },
        {
          title: "소방공무원",
          description: "배출 전국 1등!",
          content: "100학점 이상의 전문학점으로 4년간 공부",
        },
        {
          title: "소방공무원",
          description: "배출 전국 1등!",
          content: "100학점 이상의 전문학점으로 4년간 공부",
        },
      ],
      dataSlide: [
        "https://cdn.imweb.me/thumbnail/20240802/9c19a341b1bfd.png",
        "https://cdn.imweb.me/thumbnail/20240802/4c6507e6bc6f0.jpg",
        "https://cdn.imweb.me/thumbnail/20240802/b2549581b86e2.png",
        "https://cdn.imweb.me/thumbnail/20240802/9c19a341b1bfd.png",
        "https://cdn.imweb.me/thumbnail/20240802/4c6507e6bc6f0.jpg",
        "https://cdn.imweb.me/thumbnail/20240802/b2549581b86e2.png",
      ],
      dataBanner: [
        "https://cdn.imweb.me/thumbnail/20240704/b700af853e29c.png",
        "https://cdn.imweb.me/thumbnail/20240708/ada9123957119.png",
        "https://cdn.imweb.me/thumbnail/20240704/eb47e80ad5a19.png",
        "https://cdn.imweb.me/thumbnail/20240704/2bbd058dbae16.png",
      ],
    };
  },
};

const iframe = ref(null);

iframe.value?.stopVideo();
iframe.value?.pauseVideo();
iframe.value?.playVideo();
</script>

<template>
  <div>
    <div
      class="w-full h-[750px]"
      style="
        background-image: url(https://cdn.imweb.me/thumbnail/20240619/ff8b7b7f4298a.png);
        background-color: #000000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
      "
    >
      <div class="mx-auto xl:max-w-[1024px] py-[18px]">
        <div class="w-full h-[500px]"></div>
        <div class="w-full h-[125px] grid grid-cols-4 gap-4">
          <div
            class="card-department"
            v-for="(card, index) in dataCard"
            :key="index"
          >
            <div class="card-content">
              <h2 class="text-[20px] font-bold">
                {{ card.title }}
              </h2>
              <h3 class="text-[16px]">{{ card.description }}</h3>

              <p class="card-description">{{ card.content }}</p>
            </div>
            <div class="card-icon">
              <div
                class="w-[20px] h-[20px] border border-white rounded-full flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-[#F2F2F2] py-[100px]">
      <p class="text-center text-[28px]">소방안전관 <strong>리학과</strong></p>
      <div>
        <Swiper
          :slides-per-view="5"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :loop="true"
          :space-between="0"
        >
          <SwiperSlide v-for="(slide, index) in dataSlide" :key="index"
            ><div class="w-[350px] h-auto">
              <img
                :src="slide"
                alt="slide"
                class="w-full min-h-[343px] object-cover"
              /></div
          ></SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section class="py-[100px]">
      <p class="text-center text-[28px]">
        학과별주요 <strong>커리큘럼</strong>
      </p>
      <div class="mx-auto xl:max-w-[1200px] py-[18px] px-4 mb-[100px]">
        <div class="grid grid-cols-4 gap-2">
          <div
            class="w-full hover:bg-['#080036'] text-center py-4 rounded-md text-white"
            v-for="(item, index) in [
              '#36A7D0',
              '#295E7E',
              '#4C6C9C',
              '#707613',
            ]"
            :key="index"
            :style="{ backgroundColor: `${item}` }"
          >
            {{ index + 1 }}학년
          </div>
        </div>
        <div class="w-full bg-[#162A41] h-[3px] my-[30px]"></div>
        <div class="w-full bg-[#ccc] h-[1px] my-[30px]"></div>
        <div class="w-full bg-[#ccc] h-[1px] my-[30px]"></div>
      </div>

      <p class="text-center text-[28px]">
        학과별주요 <strong>커리큘럼</strong>
      </p>
      <div class="mx-auto xl:max-w-[1200px] py-[18px] px-4">
        <div class="w-full bg-[#162A41] h-[3px] my-[30px]"></div>
        <div class="w-full bg-[#ccc] h-[1px] my-[30px]"></div>
        <div class="w-full bg-[#ccc] h-[1px] my-[30px]"></div>
      </div>
    </section>

    <section class="w-full h-[622px]">
      <swiper
        :slides-per-view="1"
        :speed="1000"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :loop="true"
        class="w-dull h-full"
      >
        <swiper-slide v-for="(slide, index) in dataBanner" :key="index"
          ><div class="w-full h-full">
            <img
              :src="slide"
              alt="slide"
              class="w-full h-full object-cover"
            /></div
        ></swiper-slide>
      </swiper>
    </section>

    <section class="bg-[#F2F2F2] py-[100px]">
      <p class="text-center text-[28px]">소방안전관 <strong>리학과</strong></p>
      <div class="mx-auto xl:max-w-[1200px] py-[18px]">
        <div class="grid grid-cols-4 gap-4">
          <div
            class=""
            v-for="(item, index) in [
              'https://cdn.imweb.me/thumbnail/20240726/60b8a4370291e.png',
              'https://cdn.imweb.me/thumbnail/20240726/e4705af216037.png',
              'https://cdn.imweb.me/thumbnail/20240726/7b2a7b56cb06e.png',
              'https://cdn.imweb.me/thumbnail/20240726/952f958508475.png',
            ]"
            :key="index"
          >
            <img :src="item" alt="student" class="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-[100px]">
      <p class="text-center text-[28px]">취업 <strong>연계 기업</strong></p>
      <div class="w-full h-[2px] bg-black my-[30px]"></div>
    </section>

    <section class="bg-[#F2F2F2] pt-[60px]">
      <div class="mx-auto xl:max-w-[1200px]">
        <div class="grid grid-cols-6 gap-2">
          <div
            v-for="(item, index) in [
              { title: '모집 공고', icon: 'fa-solid fa-bell', url: '' },
              {
                title: '모집 공고 모집 공고',
                icon: 'fa-solid fa-newspaper',
                url: '',
              },
              { title: '모집 공고', icon: 'fa-solid fa-comments', url: '' },
              {
                title: '모집 공고',
                icon: 'fa-solid fa-business-time',
                url: '',
              },
              {
                title: '모집 공고',
                icon: 'fa-solid fa-graduation-cap',
                url: '',
              },
              { title: '모집 공고', icon: 'fa-solid fa-comment-dots', url: '' },
            ]"
            :key="index"
            class="card-notifi"
          >
            <div class="notifi-overlay"></div>
            <i :class="item.icon" class="notifi-icon"></i>
            <p class="text-[20px] mt-[30px] h-[40px] pr-[60px]">
              <strong>{{ item.title }}</strong>
            </p>
            <div class="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-[28px] my-[50px]">
        <strong>의사소통하다</strong>
      </p>
      <div class="w-full h-[2px] bg-black"></div>
    </section>

    <section class="bg-[#00274C] py-[54px]">
      <p class="text-center text-white text-[28px]">
        <strong>Media Contents</strong>
      </p>
      <div class="mx-auto w-full xl:max-w-[1200px]">
        <div class="w-full flex justify-end items-center">
          <a href="https://www.youtube.com/channel/UCLqQRb5ba7ZKRlt0twQExmA">
            <div class="more-item">
              <p class="text-white m-0">View More</p>
              <div class="icon-more">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="w-full h-[1px] bg-white my-3"></div>
      <div class="mx-auto w-full xl:max-w-[1200px] mt-[49px] mb-[40px]">
        <div class="grid grid-cols-3">
          <div
            v-for="(item, index) in [
              {
                title: '[전과자] ',
                sub: '소방관이 알려주는 신박한 불끄는 법',
                videoId: 'sgu4TiNucEs',
              },
              {
                title: '[경민대졸업한선배들]',
                sub: '소방안전관리과 편',
                videoId: 'sgu4TiNucEs',
              },
              {
                title: '[2023]',
                sub: 'New era, New you',
                videoId: 'sgu4TiNucEs',
              },
            ]"
            :key="index"
          >
            <p class="text-center text-white mb-[15px]">
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

<style>
/** More item css */
.more-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.more-item:hover {
  font-weight: 600;
}

.more-item:hover .icon-more {
  background-color: inherit;
  color: white;
  border: white 1px solid;
}

.icon-more {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

/** Card notification css */
.card-notifi {
  width: 100%;
  height: 187px;
  background: #fff;
  position: relative;
  transition: all 0s ease-in;
  padding: 18px 20px;
}

.card-notifi:hover {
  transition: all 0s ease-in;
  background: rgba(0, 23, 48, 1);
  color: white;
}

.notifi-icon {
  font-size: 32px;
}

.notifi-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #001730;
}

/** Card department css */
.card-department {
  width: 100%;
  min-height: 125px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease, height 0.3s ease-in;
  color: white;
  padding: 18px 20px;
}

.card-department:hover {
  background-color: rgba(0, 38, 75, 0.6);
  margin-top: -35px;
  transform: all 0.3s ease;
}

.card-department:hover .card-description {
  display: block;
  margin-top: 35px;
  transform: all 0.3s ease;
  animation: amimate 0.1s ease-in;
}

.card-department:hover .card-icon {
  display: none;
}

.card-description {
  display: none;
  transform: all 0.3s ease;
}

.card-icon {
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: end;
  align-items: end;
  transform: all 0.3s ease;
}

@keyframes amimate {
  0% {
    margin-top: 0px;
  }

  25% {
    margin-top: 7.5px;
  }

  50% {
    margin-top: 15px;
  }

  75% {
    margin-top: 22.5px;
  }

  100% {
    margin-top: 35px;
  }
}
</style>
