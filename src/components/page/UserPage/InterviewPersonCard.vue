<template>
  <div class="py-10">
    <div class="flex justify-around items-center mb-20">
      <div class="w-[330px] h-[440px]">
        <img src="@/assets/image/interview.png" class="w-full h-full object-cover" alt="">
      </div>
      <div class="flex flex-col gap-4 text-sm font-thin text-[#828282]">
        <div class="text-xl font-bold text-black">
          지역사회 교육과 함께 발전해 온 경민대학교<span class="text-lg font-normal">는</span>
        </div>
        <div>
          개교 30년을 지나 새로운 중장기발전계획 {{'<KAJA 2030>'}} 를 선포하였습니다.
        </div>
        <div>
          <div>
            이는 경민의 구성원이 한마음 한뜻으로 미래 교육 백 년을 준비하는 초석이 될 것이며,
          </div>
          <div>
            급변하는 세계 정세와 사회 수요에 적합한 글로컬 인재 양성의 밑거름이 될 것을 믿습니다.
          </div>
        </div>
        <div>
          "사람을 키우는 경민대학교"의 교육 철학을 믿고 귀한 자녀들과 가족들을 맡겨주신 그 신뢰를 저버리지 않고,<br>
          졸업 후까지 책임지는 "큰 배움터" 로서의 역할을 위해 저를 포함한 모든 교직원들이 실력을 키우고,<br>
          겸허한 자세로 봉사하며, 적극적인 정성으로 실천하겠습니다.
        </div>
        <div>
          경민대학교를 향한 여러분의 지속적인 관심과 격려를 기대하며, 여러분 모두에게<br/>
          하나님의 동일한 은혜가 넘치시길 기도합니다.
        </div>
        <div>
          경민대학교 총장 <span class="font-bold">홍지연</span>
        </div>
      </div>
    </div>
    <a href="https://www.youtube.com/channel/UCLqQRb5ba7ZKRlt0twQExmA">
      <div class="view-english">
        <div class="text-[12px]">
          View English
        </div>
        <div class="view-english-button">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "InterviewPersonCard",
};
</script>

<style>
.view-english {
  color: #00274c;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: end;
  cursor: pointer;
}
.view-english-button {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #00274c;
  border-radius: 50%;
}
.view-english:hover .view-english-button {
  color: #00274c;
  background: none;
  border: 1px solid #00274c;
  cursor: pointer;
}
</style>