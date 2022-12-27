<template>
  <n-card
    class="mb-6 mb-5 shadow-md cursor-pointer !border-0"
    footer-style="padding:0"
  >
    <template #cover>
      <UiImage :src="data.cover" class="h-[150px]"></UiImage>
    </template>
    <div class="pt-2">
      <span class="font-bold w-full truncate font-semibold">
        {{ data.title }}</span
      >
    </div>
    <div class="mt-2 flex items-end">
      <Price :value="data.price"></Price>
      <Price :value="data.t_price" :through="true" class="ml-2"></Price>
    </div>
    <template #footer v-if="data.group_id">
      <div
        class="bg-yellow-500 text-white p-3 text-xs flex items-center rounded-b"
      >
        {{ data.group_id ? "拼团中" : "秒杀中" }}
        <div class="ml-auto flex items-center">
          倒计时
          <CountDown :time="data.end_time" />
        </div>
      </div>
    </template>
  </n-card>
</template>
<script setup>
import { NCard } from "naive-ui";
defineProps({
  data: Array,
});
</script>
