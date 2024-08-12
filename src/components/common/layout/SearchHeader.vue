<template>
  <div class="w-[168px]">
    <form class="w-full text-[14px]">
      <div class="flex w-full border-b border-b-white pb-1">
        <input
          name="search"
          value=""
          placeholder="Search"
          class="bg-inherit w-full text-white focus:outline-none placeholder:text-white"
        />
        <div>
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
    <div class="flex mt-2 space-x-1">
      <div
        v-for="(item, index) in subMenu"
        :key="index"
        class="text-white text-[13px] flex hover:text-[#ccc]"
      >
        <router-link :to="`${item.value}`" class="cursor-pointer"
          >{{ item.title }}
        </router-link>
        <div class="flex justify-between items-center">
          <p
            v-if="index !== 2"
            class="w-[1px] h-[11px] border-l border-l-white ml-[8px] mr-[3px]"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
  data() {
    return {
      subMenu: [
        { title: "공지사항", value: "/11" },
        { title: "나의 지원", value: "/12" },
        { title: "자료실", value: "/13" },
      ],
    };
  },
};
</script>

<style scoped></style>
