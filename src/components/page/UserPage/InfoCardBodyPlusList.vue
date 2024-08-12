<template>
  <div class="flex gap-4">
    <info-card-body-plus v-for="item in listCard" :key="item.title" :title="item.title" :path="item.path"/>
  </div>
</template>

<script>
import InfoCardBodyPlus from '@/components/InfoCardBodyPlus.vue'
export default {
  name: 'InfoCardBodyPlusList',
  components: { InfoCardBodyPlus },
  data() {
    return {
      listCard: [
        {
          title: '2025학년도 신입생 장학금 안내',
          path: 'https://check12.imweb.me/58'
        },
        {
          title: '기숙사 안내',
          path: 'https://check12.imweb.me/58'
        },
        {
          title: '전년도 입시결과',
          path: 'https://check12.imweb.me/58'
        }
      ]
    }
  }
}
</script>

<style>

</style>