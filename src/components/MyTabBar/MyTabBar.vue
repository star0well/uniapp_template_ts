<template>
  <div class="fixed left-0 right-0 center bottom-[env(safe-area-inset-bottom)]">
    <div flex gap-2 px-32 py-12 border-base border-rd-2>
      <div
        class="transition-all"
        v-for="(item, index) of tabList"
        :key="index"
        :class="currentRoutePath == item.pagePath ? '' : ''"
        @click="handleSwitchTab(item)">
        {{ t(item.text) }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { tabBar } from "@/pages.json";
import { onLoad, onShow } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

type TabItem = {
  pagePath: string;
  text: string;
};
const { t } = useI18n();

const tabList = ref<TabItem[]>([]);

const currentRoutePath = ref();
onLoad(() => {
  uni.hideTabBar();
  tabList.value = tabBar.list;
  const current = getCurrentPages();
  currentRoutePath.value = current[current.length - 1].route;
  console.log("onLoad");
});

function handleSwitchTab(item: TabItem) {
  if (currentRoutePath.value == item.pagePath) return;
  uni.switchTab({ url: `/${item.pagePath}` });
}
onShow(() => {});
</script>
<style lang="scss" scoped>
.test {
  transition: all;
}
</style>
