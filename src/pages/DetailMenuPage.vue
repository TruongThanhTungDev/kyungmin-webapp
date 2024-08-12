<script>
import SearchIcon from "@/components/Svg/SearchIcon.vue";
export default {
  name: "DetailMenuPage",
  components: { SearchIcon },
  data() {
    return {
      dataCategories: [
        {
          title: "화재 예방 및 싸움 산업의 출력 표준",
          startPage: "",
          endPage: "",
        },
        {
          title: "2025년 입학 목표",
          startPage: "",
          endPage: "",
        },
        {
          title: "입학하고 싶은 마음을 등록하세요",
          startPage: "",
          endPage: "",
        },
        {
          title: "입학 목표",
          startPage: "",
          endPage: "",
        },
        {
          title: "학생 결과물의 품질을 평가합니다.",
          startPage: "",
          endPage: "",
        },
      ],
      activeItem: 0,
    };
  },
  methods: {
    handleChangeActive(item = 0) {
      this.activeItem = item;
    },
  },
};
</script>

<template>
  <div class="w-full bg-white">
    <div class="mx-auto w-full xl:max-w-[1200px] px-4 py-[50px]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div class="col-span-1 lg:col-span-3 text-white">
          <div
            class="bg-[#01274E] flex justify-start items-center px-[20px] py-[20px] space-x-2 mb-1"
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <strong>모두 보기</strong>
          </div>
          <div
            v-for="(item, index) in dataCategories"
            :key="index"
            class="text-[#9E9E9E] px-2 py-4 border border-t-0 cursor-pointer"
            :class="{
              'bg-[#01274E] border-0 !text-white': activeItem === index,
            }"
            @click="handleChangeActive(index)"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="col-span-1 lg:col-span-9">
          <div class="flex space-x-2 text-[28px]">
            <div class="w-[4px] h-[28px] bg-[#01274E]"></div>
            <strong class="text-[#01274E]">정기모집</strong>
          </div>
          <div
            class="flex justify-end items-center space-x-3 text-[14px] font-[500] my-[20px]"
          >
            <div class="flex space-x-2 bg-[#EBEBEB] py-2 px-2">
              <search-icon :class-name="'!text-black rotate-90'"></search-icon>
              <span>새창에서보기</span>
            </div>
            <div class="flex space-x-2 bg-[#EBEBEB] py-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>

              <span>등록지침다운로드(PDF)</span>
            </div>
          </div>

          <div class="w-full h-[750px] bg-[#ccc]"></div>
        </div>
      </div>
    </div>
    <hr class="w-full h-[3px] bg-[#00274c]" />
  </div>
</template>

<style></style>
