<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import SearchHeader from "@/components/common/layout/SearchHeader.vue";

export default {
  name: "HeaderComponent",
  components: { Carousel, Slide, SearchHeader },
  props: {
    className: { type: String },
    isScrolled: { type: Boolean },
    isFixed: { type: Boolean },
  },
  data() {
    return {
      dataMenu: [
        { title: "수시모집", value: "14" },
        { title: "정시모집", value: "15" },
        { title: "편입학", value: "16" },
        { title: "산업체", value: "17" },
        { title: "외국인", value: "18" },
        { title: "학사학위", value: "19" },
        { title: "전문기술석사", value: "20" },
        { title: "학과안내", value: "21" },
      ],
      toggleMenuMobile: false,
      toggleSearch: false,
    };
  },
  methods: {
    handleToggleMenu() {
      this.toggleMenuMobile = !this.toggleMenuMobile;
    },
    handleToggleSearch() {
      this.toggleSearch = !this.toggleSearch;
    },
  },
};
</script>

<template>
  <div
    class="w-full top-0 z-[999]"
    :class="{
      'bg-[#00264B]': isScrolled,
      'bg-[#00264B] lg:bg-transparent': !isScrolled,
      'fixed top-0 left-0': isFixed,
      'sticky ': !isFixed,
    }"
  >
    <div
      class="mx-auto xl:max-w-[1200px] flex justify-between px-4 py-[8px] lg:py-[18px]"
    >
      <div
        class="text-white flex justify-center items-center lg:hidden"
        @click="handleToggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        class="w-full lg:w-[213px] h-full cursor-pointer py-1 flex justify-center lg:justify-start items-center"
      >
        <router-link to="/">
          <div class="w-[165px] h-[40px]">
            <img
              src="@/assets/image/logo/logo.png"
              alt=""
              class="w-full h-full object-cover"
            /></div
        ></router-link>
      </div>

      <div class="w-full hidden lg:block">
        <nav class="mt-4 text-[16px] flex justify-start items-center pl-[40px]">
          <ul class="flex space-x-4">
            <li
              v-for="(item, index) in dataMenu"
              :key="index"
              class="text-white cursor-pointer px-[4px] py-1 hover:text-[#ccc]"
            >
              <router-link :to="`/menu/${item.value}`" class="cursor-pointer"
                >{{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="hidden xl:flex xl:justify-end xl:items-center">
        <search-header></search-header>
      </div>

      <div
        class="flex justify-center items-center lg:hidden"
        @click="handleToggleSearch"
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  </div>
  <div
    class="w-full border-t border-t-white border-b border-b-white lg:hidden py-[13px] bg-[#00264B]"
    :class="{ 'mt-[64px]': isFixed && !isScrolled }"
  >
    <carousel
      :items-to-show="4"
      :wrap-around="true"
      :pause-autoplay-on-hover="true"
      :items-to-scroll="3"
    >
      <slide v-for="(item, index) in dataMenu" :key="index"
        ><router-link
          :to="`/menu/${item.value}`"
          class="text-white text-[13px] cursor-pointer"
          >{{ item.title }}
        </router-link></slide
      >
    </carousel>
  </div>

  <div
    class="fixed w-full inset-0 top-0 left-0 z-[9999] lg:hidden bg-black bg-opacity-25"
    :class="{ block: toggleSearch, hidden: !toggleSearch }"
  >
    <div class="w-full h-full relative px-[20px]">
      <div
        class="text-white absolute top-[20px] right-[20px]"
        @click="handleToggleSearch"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <form class="w-full text-[14px]">
        <div class="flex w-full border-b border-b-white pt-[240px] pb-1">
          <input
            name="search"
            value=""
            placeholder="검색"
            class="bg-inherit w-full text-white focus:outline-none"
          />
          <div @click="handleToggleSearch">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div
    class="fixed w-full inset-0 top-0 left-0 z-[9999] lg:hidden bg-black bg-opacity-35"
    :class="{ block: toggleMenuMobile, hidden: !toggleMenuMobile }"
  >
    <div class="w-[75%] h-full bg-white px-[20px] py-[20px] relative">
      <div class="w-full flex justify-between items-center">
        <p>로그인이 필요합니다.</p>
        <p>로그인</p>
      </div>
      <nav class="mt-4 text-[14px]">
        <ul class="space-y-4">
          <li
            v-for="(item, index) in dataMenu"
            :key="index"
            class="text-black cursor-pointer px-[4px] py-1 hover:text-[#ccc]"
          >
            <router-link :to="`${item.value}`" class="cursor-pointer"
              >{{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div
        class="text-white absolute top-[20px] -right-[30px]"
        @click="handleToggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style></style>
