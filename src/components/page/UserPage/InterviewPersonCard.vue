<template>
  <div class="py-10">
    <div class="grid grid-cols-1 md:grid-cols-8 gap-4 mb-20">
      <div
        class="col-span-1 md:col-span-3 h-[440px] flex justify-center items-center mb-[40px]"
      >
        <img
          src="@/assets/image/interview.png"
          class="w-[290px] h-full object-cover"
          alt=""
        />
      </div>
      <div class="col-span-1 md:col-span-5 text-sm font-thin text-[#828282]">
        <div class="w-full h-full flex justify-center items-center">
          <div>
            <p class="text-xl font-bold text-black">
              {{ getContent().title
              }}<span class="text-lg font-normal">{{
                getContent().subTitle
              }}</span>
            </p>
            <p
              class="!mb-4"
              v-for="(item, index) in getContent().description"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="view-english" @click="handleChangeLang">
      <div class="text-[12px]">View English</div>
      <div class="view-english-button">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterviewPersonCard",
  data() {
    return {
      hr: {
        title: "지역사회 교육과 함께 발전해 온 경민대학교",
        subTitle: "는",
        description: [
          "개교 30년을 지나 새로운 중장기발전계획 <KAJA 2030> 를 선포하였습니다.",
          "이는 경민의 구성원이 한마음 한뜻으로 미래 교육 백 년을 준비하는 초석이 될 것이며,",
          "급변하는 세계 정세와 사회 수요에 적합한 글로컬 인재 양성의 밑거름이될 것을 믿습니다.",
          '"사람을 키우는 경민대학교"의 교육 철학을 믿고 귀한 자녀들과 가족들을 맡겨주신 그 신뢰를 저버리지 않고, 졸업 후까지 책임지는 "큰 배움터" 로서의 역할을 위해 저를 포함한 모든 교직원들이 실력을 키우고, 겸허한 자세로 봉사하며, 적극적인 정성으로 실천하겠습니다.',
          "경민대학교를 향한 여러분의 지속적인 관심과 격려를 기대하며, 여러분 모두에게 하나님의 동일한 은혜가 넘치시길 기도합니다.",
          "경민대학교 총장 홍지연",
        ],
      },
      en: {
        title: "Kyungmin University, Growing with the Community",
        subTitle: "",
        description: [
          "After 30 years of its founding, Kyungmin University has announced a new long-term development plan, <KAJA 2030>.",
          "This will serve as the foundation for all Kyungmin members to prepare for the next 100 years of education with one heart and one mind.",
          "We believe that this will lay the groundwork for cultivating global talents who are suitable for the rapidly changing global situation and social demands.",
          "We will not betray the trust of those who have entrusted their precious children and families to Kyungmin University, believing in our educational philosophy of 'Nurturing People.' We, including all faculty members, will strive to improve our skills, serve with humility, and actively put our efforts into fulfilling our role as a 'great learning place' that takes responsibility even after graduation.",
          "We look forward to your continued interest and encouragement for Kyungmin University, and we pray that God's abundant grace will be upon all of you.",
          "President of Kyungmin University, Hong Ji-yeon",
        ],
      },
      lang: "hr",
    };
  },
  methods: {
    getContent() {
      return this.lang === "en" ? this.en : this.hr;
    },
    handleChangeLang() {
      this.lang = this.lang === "hr" ? "en" : "hr";
    },
  },
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
