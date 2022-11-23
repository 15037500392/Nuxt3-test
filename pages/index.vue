<template>
  <div v-if="pending">加载中。。。</div>
  <div v-else-if="error">{{ error?.data }}</div>
  <div v-else>{{ data }}</div>
</template>
<script setup>
import { throwError } from "naive-ui/es/_utils";
const { data, pending, error } = await useFetch("/index", {
  key: "IndexData",
  baseURL: "http://demonuxtapi.dishait.cn/pc",
  headers: {
    appid: "bd9d01ecc75dbbaaefce",
  },
  transform: (res) => {
    return res.data;
  },
  lazy: true,
});

if (process.server && error.value) {
  throwError(error.value?.data?.data);
}
</script>
