<template>
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
    <div class="col-span-1 lg:col-span-3">
      <div
        class="w-full md:flex md:justify-between md:items-center border-b-primary border-b-2 py-4 mb-4"
      >
        <div class="text-[26px] text-primary font-bold">
          2025학년도 모집일정
        </div>
        <div class="flex gap-2 mt-2 md:mt-0">
          <a
            class="link-schedule bg-white !px-4 !py-1"
            :class="{ 'active-link': item.type === typeScheduleActive }"
            v-for="item in listTypeSchedule"
            :key="item.type"
            @click="changeType(item.type)"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
      <applycation-deadline
        :data-main="dataSchedule.main"
        :data-child="dataSchedule.child"
      />
    </div>
    <div class="col-span-1 md:col-span-2">
      <notice-list-home />
    </div>
  </div>
</template>

<script>
import ApplycationDeadline from "@/components/ApplycationDeadline.vue";
import NoticeListHome from "@/components/NoticeListHome.vue";
export default {
  components: { ApplycationDeadline, NoticeListHome },
  data() {
    return {
      typeScheduleActive: 1,
      listTypeSchedule: [
        {
          type: 1,
          name: "수시 1차",
          data: [
            {
              title: "기간 | 9월 9일(월) ~ 10월 2일(수) 까지",
              time: "09.09 - 10.02",
              desciption: "원서 접수 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "10.19",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "10.26~10.27",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "11.06",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "12.06~12.18",
              desciption: "면접/실기 예약 바로가기",
            },
          ],
        },
        {
          type: 2,
          name: "수시 2차",
          data: [
            {
              title: "기간 | 10월 10일(월) ~ 11월 2일(수) 까지",
              time: "10.10 - 11.02",
              desciption: "원서 접수 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "10.21",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "10.29~10.30",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "11.15",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "12.10~12.28",
              desciption: "면접/실기 예약 바로가기",
            },
          ],
        },
        {
          type: 3,
          name: "정시",
          data: [
            {
              title: "기간 | 9월 9일(월) ~ 10월 2일(수) 까지",
              time: "09.09 - 10.02",
              desciption: "원서 접수 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "10.19",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "10.26~10.27",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "11.06",
              desciption: "면접/실기 예약 바로가기",
            },
            {
              title: "면접/실기 예약",
              time: "12.06~12.18",
              desciption: "면접/실기 예약 바로가기",
            },
          ],
        },
      ],
      dataSchedule: {
        main: {},
        child: [],
      },
    };
  },
  mounted() {
    const data = this.listTypeSchedule[this.typeScheduleActive - 1].data;
    this.dataSchedule.main = data[0];
    this.dataSchedule.child = data.slice(1);
  },
  methods: {
    changeType(type) {
      this.typeScheduleActive = type;
      const data = this.listTypeSchedule[type - 1].data;
      this.dataSchedule.main = data[0];
      this.dataSchedule.child = data.slice(1);
    },
  },
};
</script>

<style>
.link-schedule {
  padding: 6px;
  border-radius: 4px;
}
.link-schedule:hover {
  background: #00274c;
  color: white !important;
}
.active-link {
  background: #00274c;
  color: white;
}
</style>
