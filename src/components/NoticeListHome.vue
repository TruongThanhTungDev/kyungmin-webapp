<template>
  <div>
    <div
      class="w-full flex justify-between items-center border-b-primary border-b-2 py-4 mb-4"
    >
      <div class="text-[26px] text-primary font-bold">공지사항</div>
      <div class="border-2 border-primary rounded-full p-1 text-primary hover:text-[#dddddd] hover:border-[#dddddd]">
        <i class="fa-solid fa-plus "></i>
      </div>
    </div>
    <div class="flex flex-col">
      <router-link v-for="(item,index) in listNoticePreview" :key="index" class="text-[#337AB7] hover:!text-[#23527c] py-5 grid grid-cols-3" :to="item.path">
        <div class="col-span-2 line-clamp-1">
          {{item.name}}
        </div>
        <div class="text-end">
          {{item.date}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeListHome",
  data() {
    return {
      listNoticePreview: [
        {
          name: '2024학년도 하계계절학기 시행 안내',
          date: '2024-06-16',
          path: 'https://check12.imweb.me/35/?idx=28288416&bmode=view'
        },
        {
          name: '2024학년도 학사학위 전공심화과정 학업계획서 학업계획서',
          date: '2024-06-16',
          path: 'https://check12.imweb.me/35/?idx=28288416&bmode=view'
        },
        {
          name: '2024학년도 학사학위 전공심화과정 학업계획서 학업계획서',
          date: '2024-06-16',
          path: 'https://check12.imweb.me/35/?idx=28288416&bmode=view'
        },
        {
          name: '2024학년도 학사학위 전공심화과정 추가모집 안내',
          date: '2024-06-16',
          path: 'https://check12.imweb.me/35/?idx=28288416&bmode=view'
        },
        {
          name: '2024학년도 학사학위 전공심화과정 2차 추가모집 안내',
          date: '2024-06-16',
          path: 'https://check12.imweb.me/35/?idx=28288416&bmode=view'
        }
      ]
    }
  }
};
</script>

<style>
</style>