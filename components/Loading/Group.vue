<template>
  <div>
    <template v-if="loading">
      <LoadingSkeleton></LoadingSkeleton>
    </template>
    <template v-else-if="error">
      <n-result
        status="500"
        title="错误提示"
        :description="error.message || '页面走丢了'"
        class="pt-[180px]"
      >
        <template #footer>
          <n-button @click="$router.go(-1)">返回上一页</n-button>
        </template>
      </n-result></template
    >
    <template v-else>
      <slot />
    </template>
  </div>
</template>
<script setup>
import { NResult, NButton } from "naive-ui";
import { onBeforeUnmount } from "vue";
const props = defineProps({
  pending: {
    type: Boolean,
    default: false,
  },
  error: {
    type: [String, Boolean, Symbol],
    default: false,
  },
});
const loading = ref(false)
console.log(loading,'loading')
const stop = watchEffect(() => {
  console.log(props.pending,loading.value,'props.pending')
  if (props.pending && !loading.value) {
    loading.value = true
  } else {
    setTimeout(() => {
      console.log('ee')
      loading.value = false
    },200)
  }
})
onBeforeUnmount(() => stop())

</script>
