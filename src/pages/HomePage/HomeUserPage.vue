<template>
  <div class="mx-auto w-full xl:max-w-[1200px] px-4 py-[100px]">
    <info-card-body-scroll class="mb-28" />
    <admission-schedule class="mb-20" />
    <info-card-body-plus-list class="mb-10" />
  </div>
  <carousel-infomation />
  <div class="mx-auto w-full xl:max-w-[1200px] px-4 py-[100px]">
    <interview-person-card />
  </div>

  <media-contents />
  <campus-gallery />
  <faculty-list />
</template>

<script>
import InfoCardBodyScroll from "@/components/page/UserPage/InfoCardBodyScroll.vue";
import InfoCardBodyPlusList from "@/components/page/UserPage/InfoCardBodyPlusList.vue";
import AdmissionSchedule from "@/components/page/UserPage/AdmissionSchedule.vue";
import CarouselInfomation from "@/components/page/UserPage/CarouselInfomation.vue";
import InterviewPersonCard from "@/components/page/UserPage/InterviewPersonCard.vue";
import MediaContents from "@/components/page/UserPage/MediaContents.vue";
import CampusGallery from "@/components/page/UserPage/CampusGallery.vue";
import FacultyList from "@/components/page/UserPage/FacultyList.vue";
export default {
  name: "PageNo1",
  components: {
    InfoCardBodyScroll,
    InfoCardBodyPlusList,
    AdmissionSchedule,
    CarouselInfomation,
    InterviewPersonCard,
    MediaContents,
    CampusGallery,
    FacultyList,
  },
};
</script>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
