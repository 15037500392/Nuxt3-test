<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi v-for="(item, index) in data" :key="index">
      <n-card class="cursor-pointer" @click="$commonOpen(item)">
        <template #cover>
          <img class="w-[100%] h-[90px]" :src="item.src" />
        </template>
        <div class="text-center pt-4">
          {{ item.name }}
        </div>
      </n-card>
    </n-gi>
  </n-grid>
</template>
<script setup>
import { NGrid, NGi, NCard } from "naive-ui";
defineProps({
  data: Array,
});
const open = (item) => {
  if (item.type === "webview") {
    window.open(item.url);
  }
};
</script>
<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
