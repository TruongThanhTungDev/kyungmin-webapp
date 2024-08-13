<template>
  <div class="py-20 w-full">
    <div class="py-4 w-full relative">
      <div class="flex justify-evenly mx-auto w-1/2">
        <div v-for="item in listFaculty" :key="item.name" class="flex flex-col gap-6">
          <div class="font-bold text-primary text-xl mb-4">{{item.name}}</div>
          <div v-for="depart in item.department" :key="depart.name">
            <a href="" class="font-bold">{{depart.name}}</a>
          </div>
        </div>
      </div>
      <div class="h-[2px] w-full absolute bg-primary top-14"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacultyList",
  data() {
    return {
      listFaculty: [
        {
          name: "인문사회",
          department: [
            {
              name: "보건의료행정과",
              path: "",
            },
            {
              name: "사회복지과",
              path: "",
            },
            {
              name: "유아교육과",
              path: "",
            },
            {
              name: "호텔관광학과",
              path: "",
            },
            {
              name: "효충군사학과",
              path: "",
            },
          ],
        },
        {
          name: "자연과학",
          department: [
            {
              name: "간호학과",
              path: "",
            },
            {
              name: "뷰티케어과",
              path: "",
            },
            {
              name: "응급구조학과",
              path: "",
            },
            {
              name: "호텔조리과",
              path: "",
            },
            {
              name: "카페베이커리과",
              path: "",
            },
          ],
        },
        {
          name: "공학",
          department: [
            {
              name: "게임콘텐츠과",
              path: "",
            },
            {
              name: "건축공간디자인학과",
              path: "",
            },
            {
              name: "소방안전관리과",
              path: "",
            },
            {
              name: "미디어영상과",
              path: "",
            },
            {
              name: "컴퓨터소프트웨어과",
              path: "",
            },
          ],
        },
        {
          name: "예체능",
          department: [
            {
              name: "연기예술과",
              path: "",
            },
            {
              name: "레포츠과",
              path: "",
            },
            {
              name: "실용음악과",
              path: "",
            },
            {
              name: "태권도외교과",
              path: "",
            },
          ],
        },
        {
          name: "자율전공",
          department: [
            {
              name: "라이프케어과",
              path: "",
            },
            {
              name: "라이프서비스과",
              path: "",
            },
            {
              name: "라이프테크과",
              path: "",
            },
            {
              name: "라이프콘텐츠과",
              path: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>