<script>
import SearchIcon from "@/components/Svg/SearchIcon.vue";

export default {
  name: "NoticePage",
  props: {
    notice: {
      type: String,
      default: "",
    },
  },
  components: { SearchIcon },
  data() {
    return {
      dataCategories: [
        {
          title: "공지사항",
          slug: "new",
        },
        {
          title: "자료실",
          slug: "add",
        },
      ],
      dataNotice: [
        {
          id: 1,
          title: "2024학년도 하계계절학기 시행 안내",
          file: "",
          createdAt: "2024.06.18",
          view: 20,
        },
        {
          id: 2,
          title: "2024학년도 학사학위 전공심화과정 학업계획서",
          file: "",
          createdAt: "2024-06-18",
          view: 20,
        },
        {
          id: 3,
          title: "2024학년도 학사학위 전공심화과정 추가 합격자 발표 안내",
          file: "file",
          createdAt: "2024.06.18",
          view: 20,
        },
        {
          id: 4,
          title: "2024학년도 학사학위 전공심화과정 추가모집 안내",
          file: "",
          createdAt: "2024.06.12",
          view: 20,
        },
        {
          id: 5,
          title: "2024학년도 학사학위 전공심화과정 2차 추가모집 안내",
          file: "file",
          createdAt: "2023.12.18",
          view: 20,
        },
        {
          id: 6,
          title: "2024학년도 하계계절학기 시행 안내",
          file: "",
          createdAt: "2024.08.13",
          view: 20,
        },
        {
          id: 7,
          title: "2024학년도 학사학위 전공심화과정 학업계획서",
          file: "",
          createdAt: "2024.08.13",
          view: 20,
        },
        {
          id: 8,
          title: "2024학년도 학사학위 전공심화과정 학업계획서",
          file: "",
          createdAt: "2024.08.11",
          view: 15,
        },
        {
          id: 9,
          title: "2024학년도 학사학위 전공심화과정 2차 추가모집 안내",
          file: "",
          createdAt: "2024.08.13",
          view: 8,
        },
        {
          id: 10,
          title: "2024학년도 하계계절학기 시행 안내",
          file: "",
          createdAt: "2024.06.18",
          view: 12,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full bg-white">
    <div class="mx-auto w-full xl:max-w-[1200px] px-4 py-[50px]">
      <div class="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <div class="col-span-1 lg:col-span-2 text-white">
          <div
            class="bg-[#01274E] flex justify-start items-center px-[20px] py-[20px] space-x-2 mb-[1px]"
          >
            <strong>모두 보기</strong>
          </div>
          <router-link
            v-for="(item, index) in dataCategories"
            :key="index"
            :to="`/notice/${item.slug}`"
            class="text-[#9E9E9E] px-[20px] py-4 block border border-t-0 cursor-pointer"
            :class="{
              'bg-[#01274E] border-0 !text-white':
                item.slug === notice ||
                (notice !== 'add' && item.slug === 'new'),
            }"
            >{{ item.title }}
          </router-link>
        </div>
        <div class="col-span-1 lg:col-span-8">
          <div class="flex space-x-2 text-[28px]">
            <div class="w-[4px] h-[28px] bg-[#01274E]"></div>
            <strong class="text-[#01274E]">Notice</strong>
          </div>

          <div
            class="w-full px-[40px] py-4 bg-[#ccc] bg-opacity-60 rounded-bl-[20px] rounded-tr-[20px] my-[20px]"
          >
            <form class="flex space-x-4 text-[13px]">
              <div class="flex justify-start items-center space-x-4">
                <span>・유형</span>
                <div
                  class="w-[350px] bg-white px-2 py-2 flex justify-between rounded-md"
                >
                  <span>전체</span> <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>

              <div
                class="flex justify-between items-center w-[350px] bg-white px-2 rounded-md"
              >
                <input
                  type="text"
                  placeholder="검색어를 입력해 주세요."
                  class="w-[90%]"
                />
                <search-icon :class-name="'!text-black'"></search-icon>
              </div>
            </form>
          </div>

          <div>
            <hr class="w-full h-[2px] bg-[#00274c]" />
            <table class="w-full">
              <thead>
                <tr class="bg-[#ccc] bg-opacity-25 w-full font-semibold">
                  <td
                    v-for="(item, index) in [
                      '숫자',
                      '제목',
                      '부착',
                      '생성일',
                      '조회수',
                    ]"
                    :key="index"
                    class="text-center py-4 text-[14px] text-[#9e9e9e]"
                  >
                    {{ item }}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(notice, index) in dataNotice"
                  :key="index"
                  class="border-b hover:bg-[#ccc] hover:bg-opacity-20 font-semibold py-4"
                >
                  <td
                    v-for="(item, index) in [notice.id, notice.title]"
                    :key="index"
                    class="text-center text-[#626262] text-[14px]"
                    :class="{
                      '!text-left': index === 1,
                      'w-[100px]': index === 0,
                    }"
                  >
                    {{ item }}
                  </td>
                  <td
                    class="flex justify-center items-center py-2 text-[#626262]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                      :class="{ 'hidden ': !notice.file }"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
                    </svg>
                  </td>
                  <td
                    v-for="(item, index) in [notice.createdAt, notice.view]"
                    :key="index"
                    class="text-center text-[#626262] text-[14px] py-4"
                  >
                    {{ item }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
