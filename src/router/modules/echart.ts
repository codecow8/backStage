export default {
  path: "/echarts",
  redirect: "/echarts/bar",
  meta: {
    icon: "informationLine",
    title: "异常页面",
    // showLink: false,
    rank: 9
  },
  children: [
    {
      path: "/echarts/bar",
      name: "棒图",
      component: () => import("@/views/echarts/index.vue"),
      meta: {
        title: "barChart"
      }
    }
  ]
} as RouteConfigsTable;
