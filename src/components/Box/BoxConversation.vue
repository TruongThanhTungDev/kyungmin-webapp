<script>
export default {
  name: "BoxConversation",
  data() {
    return {
      notifications: [
        {
          title: "수강정정 기간 안내",
          description: "입시와 무관한 내용은 삭제처리 될 수 있습니다.",
          date: "2024-06-27",
          view: 8,
        },
        {
          title: "소방안전관리과 과목 별 교수진 안내",
          description: "입시와 무관한 내용은 삭제처리 될 수 있습니다.",
          date: "2024-06-27",
          view: 4,
        },
        {
          title: "소방안전관리과 수강신청 일정 안내",
          description: "입시와 무관한 내용은 삭제처리 될 수 있습니다.",
          date: "2024-06-27",
          view: 5,
        },
        {
          title: "소방안전관리과 신입생 OT안내",
          description: "입시와 무관한 내용은 삭제처리 될 수 있습니다.",
          date: "2024-06-27",
          view: 3,
        },
        {
          title: "전문학사 과정 / 전공심화 과정 안내",
          description: "입시와 무관한 내용은 삭제처리 될 수 있습니다.",
          date: "2024-06-27",
          view: 8,
        },
      ],
      addmisions: [
        {
          title: "2024학년도 하계계절학기 시행 안내",
          description: "2024학년도 하계계절학기 시행 안내",
          date: "2024-06-27",
          view: 13,
        },
        {
          title: "2024학년도 학사학위 전공심화과정 학업계획서",
          description: "2024학년도 학사학위 전공심화과정 학업계획서",
          date: "2024-06-27",
          view: 8,
        },
        {
          title: "2024학년도 학사학위 전공심화과정 추가 합격자 발표 안내",
          description: "2024학년도 학사학위 전공심화과정 추가 합격자 발표 안내",
          date: "2024-06-27",
          view: 10,
        },
        {
          title: "2024학년도 학사학위 전공심화과정 추가모집 안내",
          description: "2024학년도 학사학위 전공심화과정 추가모집 안내",
          date: "2024-06-27",
          view: 8,
        },
        {
          title: "2024학년도 학사학위 전공심화과정 2차 추가모집 안내",
          description: "2024학년도 학사학위 전공심화과정 2차 추가모집 안내",
          date: "2024-06-27",
          view: 8,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <div class="flex justify-between border-b border-b-black pr-[40px] pb-2">
        <strong class="text-[18px]">학과 소식</strong>
        <div
          class="border-2 border-black w-[20px] h-[20px] rounded-full flex justify-center items-center"
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      <div
        v-for="(item, index) in notifications"
        :key="index"
        class="border-b border-b-[#ccc] pt-[16px] text-[#474242]"
      >
        <p class="font-bold text-[15px]">{{ item.title }}</p>
        <p class="leading-[0px] text-[12px]">{{ item.description }}</p>
        <div class="flex justify-start items-center space-x-4 text-[12px]">
          <p>관리자</p>
          <p>|</p>
          <p>{{ item.date }}</p>
          <div class="flex justify-start">
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p class="pt-[2px] pl-[2px]">{{ item.view }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-between border-b border-b-black pl-[20px] pb-2">
        <strong class="text-[18px]">학과 활동</strong>
        <div
          class="border-2 border-black w-[20px] h-[20px] rounded-full flex justify-center items-center"
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      <div
        v-for="(item, index) in addmisions"
        :key="index"
        class="border-b border-b-[#ccc] pt-[16px] text-[#474242]"
      >
        <p class="font-bold text-[15px]">{{ item.title }}</p>
        <p class="leading-[0px] text-[12px]">{{ item.description }}</p>
        <div class="flex justify-start items-center space-x-4 text-[12px]">
          <p>관리자</p>
          <p>|</p>
          <p>{{ item.date }}</p>
          <div class="flex justify-start">
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p class="pt-[2px] pl-[2px]">{{ item.view }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
