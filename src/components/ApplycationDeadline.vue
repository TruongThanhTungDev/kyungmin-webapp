<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-1">
    <div class="col-span-1 bg-white h-[333px] relative">
      <div
        class="absolute top-[15%] left-[18%] lg:left-[12%] w-[255px] h-[255px] background-main"
      ></div>
      <div class="flex justify-start w-full border-t-[2px] border-t-[#00274c]">
        <div class="title-card">원서접수</div>
      </div>
      <div class="w-full h-[240px] flex flex-col justify-center items-center">
        <div class="text-5xl font-bold text-primary mb-4">
          {{ dataMain.time }}
        </div>
        <div class="bg-primary text-white rounded-full text-center py-2 px-4">
          {{ dataMain.title }}
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="text-primary font-bold mr-2">{{ dataMain.desciption }}</div>
        <i
          class="fa-solid fa-arrow-right text-white bg-primary rounded-full w-[20px] h-[20px] flex justify-center items-center"
        ></i>
      </div>
    </div>
    <div class="bg-white col-span-1 h-[333px]">
      <div class="grid grid-cols-2">
        <div
          class="h-[166px] relative"
          v-for="(item, index) in dataChild"
          :key="index"
        >
          <div
            class="w-[97%] h-[2px] bg-[#939394]"
            :class="{ 'translate-x-[3%]': index % 2 !== 0 }"
          ></div>
          <div
            class="absolute top-[3%] w-[1px] h-[94%] bg-[#ccc]"
            :class="{ hidden: index % 2 === 0 }"
          ></div>
          <div
            class="h-full text-[#666666] flex justify-between flex-col items-center py-4"
          >
            <div>{{ item.title }}</div>
            <div
              class="text-4xl font-bold"
              :class="{ '!text-2xl': index % 2 !== 0 }"
            >
              {{ item.time }}
            </div>
            <div class="flex items-center gap-1">
              <div class="text-[10px] font-[300]">{{ item.desciption }}</div>
              <i
                class="fa-solid fa-arrow-right text-white text-[10px] bg-[#666666] rounded-full w-[14px] h-[14px] flex justify-center items-center"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationDeadline",
  props: {
    dataMain: {
      type: Object,
      default: () => ({}),
    },
    dataChild: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.background-main {
  background-image: url("@/assets/image/background/logo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  opacity: 0.2;
}
.title-card {
  background-color: #00274c;
  padding: 8px 50px 8px 30px;
  position: relative;
  display: inline-block;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 10% 100%, 0 100%);
  font-weight: 700;
  color: white;
  font-size: 20px;
}
.mid-border-first::after,
.mid-border-second::after {
  position: absolute;
  content: "";
  height: 90%;
  width: 1px;
  background: #bcbcbc;
  left: 50%;
}
.end-border-first::before {
  position: absolute;
  content: "";
  height: 2px;
  width: 49%;
  background: #666666;
  bottom: -8px;
  left: 0;
}
.end-border-second::after {
  position: absolute;
  content: "";
  height: 2px;
  width: 49%;
  background: #666666;
  bottom: -8px;
  right: 0;
}
</style>
