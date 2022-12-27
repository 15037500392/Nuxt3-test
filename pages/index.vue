<template>
  <LoadingGroup :pending="pending" :error="error">
    <div>
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
      <ListCard
        v-for="(item, index) in listData"
        :key="index"
        :data="item"
      ></ListCard>
    </div>
  </LoadingGroup>
</template>
<script setup>
import { throwError } from "naive-ui/es/_utils";
import { reactive, computed, isRef, ref } from "vue";
useHead({
  title: "首页",
});
const { data, pending, error } = await useIndexDataApi();

// 获取拼团数据
const { data: pinData } = await usePinTeamApi({
  page: 1,
  usable: 8,
});

// // 服务器错误处理
// if (process.server && error.value) {
//   throwError(error.value?.data?.data);
// }

// // 轮播图数据
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
</script>
