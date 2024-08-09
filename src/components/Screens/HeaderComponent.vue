<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      dataMenu: [
        { title: "수시모집", value: "/14" },
        { title: "정시모집", value: "/15" },
        { title: "편입학", value: "/16" },
        { title: "산업체", value: "/17" },
        { title: "외국인", value: "/18" },
        { title: "학사학위", value: "/19" },
        { title: "전문기술석사", value: "/20" },
        { title: "학과안내", value: "/21" },
      ],
      subMenu: [
        { title: "공지사항", value: "/11" },
        { title: "나의 지원", value: "/12" },
        { title: "자료실", value: "/13" },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full h-auto bg-[#00264B]">
    <div
      class="mx-auto xl:max-w-[1200px] lg:py-[18px] lg:flex lg:justify-between border-b border-b-white lg:border-b-0"
    >
      <div class="flex justify-start px-4 pt-[18px] lg:pt-0 relative">
        <div class="text-white flex justify-center items-center lg:hidden">
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
        <nav class="mt-4 text-[16px] hidden lg:block">
          <ul class="flex space-x-4">
            <li
              v-for="(item, index) in dataMenu"
              :key="index"
              class="text-white cursor-pointer px-[4px] py-1 hover:text-[#ccc]"
            >
              <router-link :to="`${item.value}`" class="cursor-pointer"
                >{{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="hidden xl:flex xl:justify-end xl:items-center">
        <div class="w-[168px]">
          <form class="w-full text-[14px]">
            <div class="flex w-full border-b border-b-white pb-1">
              <input
                name="search"
                value=""
                placeholder="Search"
                class="bg-inherit w-full text-white focus:outline-none"
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
      </div>

      <div
        class="w-full border-t border-t-white border-b border-b-white mt-[10px] lg:hidden"
      >
        <nav
          class="mt-4 px-[40px] text-[14px] min-w-[1000px] max-w-2500px] overflow-x-auto"
        >
          <ul class="flex space-x-6">
            <li
              v-for="(item, index) in dataMenu"
              :key="index"
              class="text-white cursor-pointer px-[4px] py-1 hover:text-[#ccc]"
            >
              <router-link :to="`${item.value}`" class="cursor-pointer"
                >{{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="absolute top-0 left-0 w-full h-[100vh] bg-black bg-opacity-35"
      >
        <div class="w-[75%] h-[100vh] bg-white"></div>
      </div>
    </div>
  </div>
</template>

<style></style>
