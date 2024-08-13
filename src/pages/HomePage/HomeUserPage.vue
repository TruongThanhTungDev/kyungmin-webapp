<template>
  <div class="mx-auto w-full xl:max-w-[1200px] px-4 py-[100px]">
    <info-card-body-scroll class="mb-28" />
    <admission-schedule class="mb-20" />
    <info-card-body-plus-list />
  </div>
</template>

<script>
import InfoCardBodyScroll from "@/components/page/UserPage/InfoCardBodyScroll.vue";
import InfoCardBodyPlusList from "@/components/page/UserPage/InfoCardBodyPlusList.vue";
import AdmissionSchedule from "@/components/page/UserPage/AdmissionSchedule.vue";
export default {
  components: { InfoCardBodyScroll, InfoCardBodyPlusList, AdmissionSchedule },
  name: "LandingPage",
};
</script>

<style></style>
