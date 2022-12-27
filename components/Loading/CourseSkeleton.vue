<template>
  <n-grid :x-gap="20" :cols="4">
    <n-grid-item v-for="i in 8" :key="i">
      <n-card class="mb-5">
        <template #cover>
          <n-skeleton height="120px" width="100%" />
        </template>
        <n-skeleton text style="width: 100%" />
        <div>
          <n-skeleton text style="width: 60%" />
          <n-skeleton text style="width: 20%" />
        </div>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>
<script setup>
import { NGrid, NGridItem, NCard, NSkeleton } from "naive-ui";
</script>
