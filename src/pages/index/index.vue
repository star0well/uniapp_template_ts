<template>
  <view class="content">
    <view class="test bg-red">
      <span text-md c-blue> {{ count }}</span>
      <text>54</text>
      <div @click="store.increment">{{ t("about") }}</div>
      <div @click="changeLanguage">{{ t("change") }}</div>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/userStore/userStore";
import { storeToRefs } from "pinia";
import { loadLanguageAsync } from "@/i18n/i18n";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

function changeLanguage() {
  const locale = uni.getLocale();
  console.log(locale);

  loadLanguageAsync("en");
}
const store = useUserStore();
const { count } = storeToRefs(store);
</script>

<style>
.test {
  --uno: w-375;
}
</style>
