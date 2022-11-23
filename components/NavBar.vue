<template>
  <div class="w-[100%] h-[80px]">
    <div class="navbar">
      <div class="container flex items-center h-[60px]">
        <n-button text class="text-xl !font-bold">山谣编程</n-button>
        <ui-menu>
          <ui-menu-item
            v-for="(item, index) of menus"
            :key="index"
            :active="IsMenuItemActive(item)"
            @click="handleOpen(item.path)"
          >
            {{ item.name }}
          </ui-menu-item>
        </ui-menu>
        <n-button circle class="ml-auto mr-3">
          <template #icon>
            <n-icon><Search /></n-icon>
          </template>
        </n-button>
        <!-- <n-button strong secondary >登录</n-button> -->
        <n-dropdown
          trigger="hover"
          :options="userOptions"
          @select="handleSelect"
        >
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </n-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
import { NButton, NIcon, NDropdown, NAvatar } from "naive-ui";
import { Search } from "@vicons/ionicons5";
const route = useRoute();
console.log(route, "router");
const userOptions = [
  {
    label: "用户中心",
    key: "center",
  },
  {
    label: "退出",
    key: "logout",
  },
];
const menus = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "考试",
    path: "/paper/1",
    match:[{
      name: "paper-page",
      params:{
        type:"paper"
      }
    }]
  },
  {
    name: "拼团",
    path: "/list/group/1",
    match:[{
      name: " list-type-page",
      params:{
        type:"group"
      }
    }]
  },
  {
    name: "秒杀",
    path: "/list/flashSale/1",
    match:[{
      name: "list-type-page",
        params:{
        type:"flashSale"
      }
    }]
  },
  {
    name: "直播",
    path: "/list/live/1",
    match:[{
      name: "list-type-page",
      params:{
        type:"live"
      }
    }]
  },
  {
    name: "专栏",
    path: "/list/column/1",
    match:[{
      name: "list-type-page",
      params:{
        type:"column"
      }
    }]
  },
  {
    name: "电子书",
    path: "/list/book/1",
    match:[{
      name: "list-type-page",
      params:{
        type:"book"
      }
    }]
  },
  {
    name: "社区",
    path: "/bbs/0/1",
    match:[{
      name: "bbs-type-page"
    }]
  },
  {
    name: "课程",
    path: "/list/course/1",
    match:[{
      name: "list-type-page",
      params:{
        type:"course"
      }
    }]
  },
];
function handleOpen(path) {
  navigateTo(path);
}

// 用户中心下拉
const handleSelect = (e) => {
  console.log(e);
};

const IsMenuItemActive = (item) => {
  if(item.match){
    let i = item.match.findIndex(o => {
      let res = true
      if(o.params && typeof o.params === "object"){
        res = o.params.type === route.params.type
        console.log(route.params.type,'route.params.type')
      }
      return o.name === route.name && res
    })
    return i !== -1
  }
  return item.path === route.path
}

</script>
<style scoped>
.navbar {
  z-index: 1000;
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}
</style>
