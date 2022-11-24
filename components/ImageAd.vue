<template>
    <img class="w-[100%] h-[100px] rounded mt-6 mb-6 cursor-pointer" v-for="(item, index) in data" :key="index" :src="item.src"/>
</template>
<script setup>
defineProps({
  data: Array,
});
</script>