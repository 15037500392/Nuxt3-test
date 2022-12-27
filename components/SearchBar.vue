<template>
  <n-drawer
    v-model:show="visible"
    placement="top"
    :on-after-enter="addKeydownEvent"
    :on-after-leave="removeKeydownEvent"
  >
    <div class="h-full flex justify-center items-center">
      <n-input-group class="flex justify-center items-center">
        <n-input
          v-model:value="keyword"
          placeholder="请输入关键词"
          :style="{ width: '500px' }"
        />
        <n-button type="primary" @click="handleSearch"> 搜索 </n-button>
      </n-input-group>
    </div>
  </n-drawer>
</template>
<script setup>
import { NDrawer, NInputGroup, NButton, NInput } from "naive-ui";
import { ref } from "vue";
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const visible = ref(false);
const keyword = ref(null);
const open = () => {
  keyword.value = "";
  visible.value = true;
};
const close = () => {
  visible.value = false;
};
const handleSearch = () => {
  setTimeout(() => {
    close();
  }, 1000);
  navigateTo({
    name: "search-type-page",
    params: {
      type: "course",
      page: 1,
    },
    query: {
      keyword: keyword.value,
    },
  });
};
function handleEnterEvent(e) {
  if (e.key === "Enter" && keyword.value) {
    handleSearch();
  }
}
const addKeydownEvent = () => {
  document.addEventListener("keydown", handleEnterEvent);
};

const removeKeydownEvent = () => {
  document.removeEventListener("keydown", handleEnterEvent);
};

defineExpose({
  open,
});
</script>
