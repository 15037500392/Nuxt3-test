<template>
  <div>
    <template v-if="pending">加载中。。。</template>
    <template v-else-if="error">{{ error?.data }}</template>
    <template v-else>
      <!-- 轮播图-start -->
      <Banner :data="swiperData.data"></Banner>
      <!-- 轮播图-end -->
      <!-- 图片分栏 -->
      <ImageNav :data="iconData.data"></ImageNav>
      <!-- 图片广告 -->
      <ImageAd :data="imageAd.data"></ImageAd>
      <!-- 拼团 -->
      <ListCard :data="pinData"></ListCard>
      <!-- 列表 -->
      <ListCard v-for="(item,index) in listData" :key="index" :data="item"></ListCard>
    </template>
  </div>
</template>
<script setup>
import { throwError } from "naive-ui/es/_utils";
import { reactive, computed, isRef, ref } from "vue";
// 获取首页数据
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

// 获取拼团数据
const {data:pinData }= await useFetch("/group/list?page=1&usable=8", {
  key: "pinData",
  baseURL: "http://demonuxtapi.dishait.cn/pc",
  headers: {
    appid: "bd9d01ecc75dbbaaefce",
  },
  transform: (res) => {
    return res.data;
  },
  lazy: true,
});
console.log(pinData,'pinData')
// pinData.value = {
//   title: '拼团',
//   data: pinData.value.rows
// }
// console.log(pinData,'pinData')
// 服务器错误处理
if (process.server && error.value) {
  throwError(error.value?.data?.data);
}

// 轮播图数据
const swiperData = computed(() => {
  let filterData =
    data.value.filter((item) => {
      return item.type === "swiper";
    }) || [];
  if (filterData.length) {
    return filterData[0];
  } else {
    return [];
  }
});

// 图片分类数据
const iconData = computed(() => {
  let filterData =
    data.value.filter((item) => {
      return item.type === "icons";
    }) || [];
  if (filterData.length) {
    return filterData[0];
  } else {
    return [];
  }
});

// 广告位数据
const imageAd = computed(() => {
  let filterData =
    data.value.filter((item) => {
      return item.type === "imageAd";
    }) || [];
  if (filterData.length) {
    return filterData[0];
  } else {
    return [];
  }
});

// 列表数据
const listData = computed(() => {
  let filterData =
    data.value.filter((item) => {
      return item.type === "list";
    }) || [];
  return filterData;
});
console.log(listData,'listData')
</script>
