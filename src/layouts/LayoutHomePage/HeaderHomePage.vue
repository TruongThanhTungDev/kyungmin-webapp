<template>
  <div class="relative header-background h-[850px]">
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="py-5 flex max-w-[1200px] my-0 mx-auto gap-6">
          <div class="w-[213px] cursor-pointer">
            <img src="@/assets/image/logo/logo.png" alt="" width="165.72" height="44" />
          </div>
          <div class="flex text-lg text-white gap-6">
            <router-link class="hover:text-[#B0B0B08C] transition-all cursor-pointer" v-for="menu in listMenu" :key="menu.name" :to="menu.path">
              {{menu.name}}
            </router-link>
          </div>
          <div class="flex justify-end">
            <search-header/>
          </div>
        </div>
      </div>
      <div class="flex justify-center mx-auto gap-4 mb-[130px] w-[55%]">
        <card-header v-for="card in listCard" :key="card.name" :name="card.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from '@/components/common/layout/CardHeader.vue';
import SearchHeader from '@/components/common/layout/SearchHeader.vue';
export default {
  components: { CardHeader, SearchHeader },
  name: "HeaderHomePage",
  data() {
    return {
      listMenu: [
        {
          name: '수시모집',
          path: ''
        },
        {
          name: '정시모집',
          path: ''
        },
        {
          name: '편입학',
          path: ''
        },
        {
          name: '산업체',
          path: ''
        },
        {
          name: '외국인',
          path: ''
        },
        {
          name: '학사학위',
          path: ''
        },
        {
          name: '전문기술석사',
          path: ''
        },
        {
          name: '학과안내',
          path: ''
        }
      ],
      listCard: [
        {
          name: '수시모집',
          description: '',
          path: '',
        },
        {
          name: '모집요강',
          description: '',
          path: '',
        },
        {
          name: '학과안내',
          description: '',
          path: '',
        },
        {
          name: '장학금 안내',
          description: '',
          path: '',
        }
      ]
    }
  }
};
</script>

<style scoped>
.header-background {
  background-image: url(https://cdn.imweb.me/thumbnail/20240619/abe272421ae94.png);
  background-color: #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
