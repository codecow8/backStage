<script setup lang="ts">
import echarts from "@/plugins/echarts";


import { onMounted } from "vue";

let barChart;
onMounted(() => {
  const bar = document.querySelector("#bar");
  console.log(bar, "barbar", echarts);
  bar.style.width = "500px";
  bar.style.height = "500px";
  barChart = echarts.init(bar);
  barChart.setOption({
    title: {
      text: "ECharts 入门示例"
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
});


</script>

<template>
  <div>
    <div id="bar" style="" />
  </div>
</template>

<style scoped lang="scss">

</style>
