<template>
  <div class="w-full h-[333px] grid grid-cols-2 gap-1">
    <div class="col-span-1 bg-white relative">
      <div
        class="absolute top-[15%] left-[12%] w-[255px] h-[255px] background-main"
      ></div>
      <div class="flex justify-start w-full border-t-[2px] border-t-[#00274c]">
        <div class="title-card">원서접수</div>
      </div>
      <div class="w-full h-[240px] flex flex-col justify-center items-center">
        <div class="text-5xl font-bold text-primary mb-4">09.09 - 10.02</div>
        <div class="bg-primary text-white rounded-full text-center py-2 px-4">
          기간 | 9월 9일(월) ~ 10월 2일(수) 까지
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="text-primary font-bold mr-2">원서 접수 바로가기</div>
        <i
          class="fa-solid fa-arrow-right text-white bg-primary rounded-full w-[20px] h-[20px] flex justify-center items-center"
        ></i>
      </div>
    </div>
    <div class="bg-white col-span-1">
      <div class="grid grid-cols-2">
        <div class="py-4 border-b-2">
          <div
            class="border-r border-r-#[#666666] h-full text-[#666666] flex justify-between flex-col items-center"
          >
            <div>면접/실기 예약</div>
            <div class="text-4xl font-700">10.19</div>
            <div class="flex items-center gap-1">
              <div class="text-[10px] font-[300]">면접/실기 예약 바로가기</div>
              <i
                class="fa-solid fa-arrow-right text-white text-[10px] bg-[#666666] rounded-full w-[14px] h-[14px] flex justify-center items-center"
              ></i>
            </div>
          </div>
        </div>
        <div class="py-4 border-b-2">
          <div
            class="h-full text-[#666666] flex justify-between flex-col items-center"
          >
            <div>면접/실기 예약</div>
            <div class="text-4xl font-700">10.19</div>
            <div class="flex items-center gap-1">
              <div class="text-[10px] font-[300]">면접/실기 예약 바로가기</div>
              <i
                class="fa-solid fa-arrow-right text-white text-[10px] bg-[#666666] rounded-full w-[14px] h-[14px] flex justify-center items-center"
              ></i>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div
            class="border-r border-r-#[#666666] h-full text-[#666666] flex justify-between flex-col items-center"
          >
            <div>면접/실기 예약</div>
            <div class="text-4xl font-700">10.19</div>
            <div class="flex items-center gap-1">
              <div class="text-[10px] font-[300]">면접/실기 예약 바로가기</div>
              <i
                class="fa-solid fa-arrow-right text-white text-[10px] bg-[#666666] rounded-full w-[14px] h-[14px] flex justify-center items-center"
              ></i>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div
            class="h-full text-[#666666] flex justify-between flex-col items-center"
          >
            <div>면접/실기 예약</div>
            <div class="text-4xl font-700">10.19</div>
            <div class="flex items-center gap-1">
              <div class="text-[10px] font-[300]">면접/실기 예약 바로가기</div>
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
