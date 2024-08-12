<template>
  <div>
    <div class="main-container">
      <info-card-body-scroll class="mb-28"/>
      <admission-schedule class="mb-20"/>
      <info-card-body-plus-list class="mb-10"/>
    </div>
    <carousel-infomation/>
  </div>
</template>

<script>
import InfoCardBodyScroll from '@/components/page/UserPage/InfoCardBodyScroll.vue'
import InfoCardBodyPlusList from '@/components/page/UserPage/InfoCardBodyPlusList.vue'
import AdmissionSchedule from '@/components/page/UserPage/AdmissionSchedule.vue'
import CarouselInfomation from '@/components/page/UserPage/CarouselInfomation.vue'
export default {
  components: { InfoCardBodyScroll, InfoCardBodyPlusList, AdmissionSchedule, CarouselInfomation },
  name: 'PageNo1'
}
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