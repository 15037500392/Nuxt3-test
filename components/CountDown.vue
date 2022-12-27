<template>
  <div class="count-down" v-if="data">
    <small class="count-box">{{data.days}}</small>天
    <small class="count-box">{{data.hours}}</small>:
    <small class="count-box">{{data.minutes}}</small>:
    <small class="count-box">{{data.seconds}}</small>
  </div>
</template>
<script setup>
import { Timer } from "@vicons/ionicons5";
import { padStart } from "lodash";
import { computed } from "vue";
const props = defineProps({
  time: {
    type: [String, Number],
    default: "",
  },
});

const emit = defineEmits(["start", "end"]);
const data = useCountDown(props.time);
function useCountDown(end_time) {
  const timeout = ref(0);
  const Timer = ref(null);
  if (typeof end_time === "string") {
    end_time = new Date(end_time).getTime();
  }
  timeout.value = (end_time - new Date("2022-05-01").getTime()) / 1000;

  if (timeout.value <= 0) {
    return emit("end");
  }
  close();
  Timer.value = setInterval(() => {
    timeout.value--;
    if (timeout.value <= 0) {
      close();
      emit("end");
    }
  }, 1000);

  function close() {
    if (Timer.value) {
      clearInterval(Timer.value);
    }
  }
  const d = computed(() => {
    return formatDiffDate(timeout.value);
  });
  
  return d
}

// 将秒转成天时分秒
function formatDiffDate(seconds) {
  let time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  if (seconds > 0) {
    time.days = Math.floor(seconds / (60 * 60 * 24));
    time.hours = Math.floor(seconds / (60 * 60) - time.days * 24);

    time.minutes =
      Math.floor(seconds / 60) - time.days * 24 * 60 - time.hours * 60;
    time.seconds =
      Math.floor(seconds) -
      time.days * 24 * 60 * 60 -
      time.hours * 60 * 60 -
      time.minutes * 60;
  }
  time.days = time.days > 10 ? time.days : `0${time.days}`
  time.hours = time.hours > 10 ? time.hours : `0${time.hours}`
  time.minutes = time.minutes > 10 ? time.minutes : `0${time.minutes}`
  time.seconds = time.seconds > 10 ? time.seconds: `0${time.seconds}`
  return time;
}
</script>
<style scoped>
  .count-box{
    background: white;
    border-radius: 2px;
    padding: 2px 3px;
    margin: 0 3px;
    @apply text-yellow-500;
  }
</style>
