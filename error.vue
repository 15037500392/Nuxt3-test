<template>
  <n-result
    status="500"
    title="500 服务器错误"
    :description="error.message"
    class="pt-[180px]"
  >
    <template #footer>
      <n-button>散财消灾</n-button>
    </template>
  </n-result>
</template>
<script setup>
import { NResult, NButton } from "naive-ui";
const props = defineProps({
    error: Object
})
const handleError = () => clearError({redirect: '/'})
</script>
