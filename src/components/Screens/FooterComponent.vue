<script>
export default {
  name: "FooterComponent",
  props: {
    className: { type: String },
  },
  data() {
    return {
      dataFooter: [
        { title: "대학입시", value: "/1" },
        { title: "입찰공고", value: "/2" },
        { title: "예결산공고", value: "/3" },
        { title: "성희롱 사이버신고센터", value: "/4" },
        { title: "발전기금", value: "/5" },
        { title: "개인정보처리방침", value: "/6" },
        { title: "이메일무단수집거부", value: "/7" },
      ],
      subFooter: [
        { title: "양상정보기기운영관리방침", value: "/8" },
        { title: "개인정보제공내역", value: "/9" },
        { title: "정보공개", value: "/10" },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full h-auto bg-white" :class="className">
    <div class="mx-auto xl:max-w-[1200px] py-[30px] text-[#474242] px-4">
      <div class="w-full md:flex justify-between">
        <div class="text-[13px] leading-1 hidden md:block">
          <p>
            <router-link
              v-for="(item, index) in dataFooter"
              :key="index"
              :to="`${item.value}`"
              class="cursor-pointer hover:text-[#001D33]"
              >{{ item.title }} ・
            </router-link>
          </p>
          <p class="">
            <router-link
              v-for="(item, index) in subFooter"
              :key="index"
              :to="`${item.value}`"
              class="cursor-pointer hover:text-[#001D33]"
              >{{ item.title }}<span v-if="index !== 2"> ・</span>
            </router-link>
          </p>
        </div>
        <div>
          <router-link to="/">
            <div
              class="w-[214px] h-full cursor-pointer py-1 flex justify-start items-center"
            >
              <div class="w-[214px] h-[56px]">
                <img
                  src="@/assets/image/logo/logo-black.png"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="mt-[20px] md:mt-[50px]">
        <strong class="text-[14px] md:text-[18px] text-[#001D33]">
          경민대학교 대표 전화 031-828-7700
          <span class="mr-[20px]"></span> 입시
          <span class="md:mr-[8px]"></span>031-828-7722
        </strong>
        <p class="text-[14px] mt-[4px]">(11618)경기도 의정부시 서부로 545</p>
      </div>
    </div>
  </div>
</template>

<style></style>
