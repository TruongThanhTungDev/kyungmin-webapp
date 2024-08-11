<template>
  <div class="main-container">
    <info-card-body-scroll/>
    <info-card-body-plus-list/>
  </div>
</template>

<script>
import InfoCardBodyScroll from '@/components/page/UserPage/InfoCardBodyScroll.vue'
import InfoCardBodyPlusList from '@/components/page/UserPage/InfoCardBodyPlusList.vue'
export default {
  components: { InfoCardBodyScroll, InfoCardBodyPlusList },
  name: 'PageNo1'
}
</script>

<style>
</style>