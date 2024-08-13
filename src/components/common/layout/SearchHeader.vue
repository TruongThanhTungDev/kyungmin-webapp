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
        <SearchIcon></SearchIcon>
      </div>
    </form>
    <div class="flex mt-2 space-x-1">
      <div
        v-for="(item, index) in subMenu"
        :key="index"
        class="text-white text-[13px] flex hover:text-[#ccc]"
      >
        <router-link :to="`/notice/${item.value}`" class="cursor-pointer"
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
import SearchIcon from "@/components/Svg/SearchIcon.vue";
export default {
  name: "SearchHeader",
  components: { SearchIcon },
  data() {
    return {
      subMenu: [
        { title: "공지사항", value: "new" },
        { title: "나의 지원", value: "help" },
        { title: "자료실", value: "add" },
      ],
    };
  },
};
</script>

<style scoped></style>
