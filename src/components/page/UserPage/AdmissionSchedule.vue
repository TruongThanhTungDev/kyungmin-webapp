<template>
  <div class="flex gap-[100px]">
    <div class="w-[702.33px]">
      <div class="w-full flex justify-between items-center border-b-primary border-b-2 py-4 mb-4">
        <div class="text-[26px] text-primary font-bold">
          2025학년도 모집일정
        </div>
        <div class="flex gap-2">
          <a class="link-schedule" :class="{'active-link' : item.type === typeScheduleActive}" v-for="item in listTypeSchedule" :key="item.type" @click="changeType(item.type)">
            {{item.name}}
          </a>
        </div>
      </div>
      <applycation-deadline/>
    </div>
    <div class="flex-1">
      <notice-list-home/>
    </div>
  </div>
</template>

<script>
import ApplycationDeadline from '@/components/ApplycationDeadline.vue'
import NoticeListHome from '@/components/NoticeListHome.vue'
export default {
  components: { ApplycationDeadline, NoticeListHome },
  data() {
    return {
      typeScheduleActive: 1,
      listTypeSchedule: [
        {
          type: 1,
          name: '수시 1차'
        },
        {
          type: 2,
          name: '수시 2차'
        },
        {
          type: 3,
          name: '정시'
        }
      ]
    }
  },
  methods: {
    changeType(type) {
      this.typeScheduleActive = type
    }
  }
}
</script>

<style>
.link-schedule {
  padding: 6px;
  border-radius: 4px;
}
.link-schedule:hover {
  background: #00274c;
  color: white!important;
}
.active-link {
  background: #00274c;
  color: white;
}
</style>