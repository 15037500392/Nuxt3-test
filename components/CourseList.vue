<template>
  <n-card class="mb-6 mb-5 shadow-md cursor-pointer !border-0">
    <template #cover>
      <img :src="data.cover" class="h-[150px]" />
    </template>
    <div class="pt-2">
      <span class="font-bold w-full truncate font-semibold">
        {{ data.title }}</span
      >
    </div>
    <div class=" mt-2 flex items-end">
      <Price :value="data.price"></Price>
      <Price :value="data.t_price" :through="true" class="ml-2"></Price>
    </div>
  </n-card>
</template>
<script setup>
import { NCard } from "naive-ui";
defineProps({
  data: Array
});
</script>
