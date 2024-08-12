import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "",
    name: "Kyungmin College Home",
    component: () => import("@/layouts/LayoutHomePage/LayoutHomePage.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/pages/HomePage/HomeUserPage.vue"),
      },
    ],
  },
  {
    path: "/department/:name",
    name: "DepartmentPage",
    component: () =>
      import("@/layouts/LayoutChildrenPage/LayoutChildrenPage.vue"),
    children: [
      {
        path: "",
        name: "Page",
        component: () => import("@/pages/ChildrenPage.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/menu/:menu",
    name: "MenuPDFPage",
    component: () => import("@/layouts/LayoutMenuPage/LayoutMenuPage.vue"),
    children: [
      {
        path: "",
        name: "Detail Menu",
        component: () => import("@/pages/DetailMenuPage.vue"),
        props: true,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});
export default router;
