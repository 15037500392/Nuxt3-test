<template>
  <div class="flex mb-3">
    <span class="text-lg">{{ data.title || "拼团" }}</span>
    <n-button quaternary class="ml-auto">查看更多</n-button>
  </div>
  <n-grid x-gap="12" :cols="4" v-if="data.title">
    <n-gi v-for="(item, index) in data.data" :key="index">
      <n-card class="cursor-pointer">
        <CourseList :data="item"></CourseList>
      </n-card>
    </n-gi>
  </n-grid>
  <n-grid x-gap="12" :cols="4" v-else>
    <n-gi v-for="(item, index) in data.rows" :key="index">
      <n-card class="cursor-pointer">
        <CourseList :data="item"></CourseList>
      </n-card>
    </n-gi>
  </n-grid>
</template>
<script setup>
import { computed } from "vue";
import { NButton, NGrid, NGi } from "naive-ui";
defineProps({
  data: Array,
});
// console.log(data.value,'ddd')
const CourseData = computed(() => {
  return 
  // if (data.value.title) {
  //   return data.value.data;
  // } else {
  //   return data.value.rows;
  // }
});
</script>
