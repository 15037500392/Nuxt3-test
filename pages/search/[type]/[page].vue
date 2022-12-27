<template>
  <div>
    <h5 class="text-lg my-3">"{{ title }}"的搜索相关结果</h5>
    <UiTab>
      <UiTabItem
        v-for="(item, index) in tabs"
        :key="index"
        :active="activeLabel === item.value"
        @click="handleSelect(item)"
        >{{ item.label }}</UiTabItem
      >
    </UiTab>
    <LoadingGroup :pending="pending" :error="error">
      <template #loading>
        <LoadingCourseSkeleton></LoadingCourseSkeleton>
      </template>
      <n-grid x-gap="20" :cols="4">
        <n-gi v-for="item in rows" :key="item.id">
          <n-card class="cursor-pointer">
            <CourseList :data="item"></CourseList>
          </n-card>
        </n-gi>
      </n-grid>
    </LoadingGroup>
    <n-pagination
      v-model:page="page"
      :page-count="total"
      @update:page="handlePageChange"
    />
  </div>
</template>
<script setup>
import { NGrid, NGi, NPagination } from "naive-ui";
const route = useRoute();
const title = ref(route.query.keyword);
const type = ref(route.params.type);
useHead({
  title,
});
const activeLabel = ref(type);
const tabs = [
  {
    label: "课程",
    value: "course",
  },
  {
    label: "专栏",
    value: "column",
  },
];

const handleSelect = (data) => {
  navigateTo({
    params: {
      ...route.params,
      type: data.value,
    },
    query: {
      ...route.query,
    },
  });
};
const { page, limit, total, handlePageChange, rows, pending, refresh } =
  await usePage(({ page, limit }) =>
    useSearchListApi(() => {
      return {
        page: page.value,
        keyword: encodeURIComponent(title.value),
        type: type.value,
      };
    })
  );
// const { data, pending, error, refresh } = await useSearchListApi(() => {
//   return {
//     page: page.value,
//     keyword: encodeURIComponent(title.value),
//     type: type.value,
//   };
// });

// const rows = computed(() => data.value?.rows ?? []);
// const total = computed(() => {
//   let total = data.value?.count ?? 0;
//   return Math.ceil(total / 10);
// });
// const handlePageChange = (p) => {
//   navigateTo({
//     params: {
//       ...route.params,
//       page: p,
//     },
//     query: {
//       ...route.query,
//     },
//   });
// };

const stop = watch(
  () => route.query.keyword,
  (newValue) => {
    title.value = newValue;
    refresh();
  }
);
onBeforeUnmount(() => stop());
definePageMeta({
  middleware: ["search"],
});
</script>
