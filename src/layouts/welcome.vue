<script setup lang="ts">
import welAppBar from '@/components/welcome/welAppBar.vue'
import welAbout from '@/components/welcome/welAbout.vue'
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
const version = computed((): string => {
  return baseStore.versionInfo
})

const appName = computed((): string => {
  return baseStore.appName
})

const copyRightYear = computed((): string => {
  const beginningYear = 2021
  const thisYear = new Date().getFullYear()
  return beginningYear < thisYear ? `${beginningYear} - ${thisYear}` : beginningYear
})
</script>

<template>
  <wel-app-bar />
  <div class="card bg" style="height: 470px">
    <div class="flex flex-column card-container align-items-center justify-content-center">
      <div class="flex h-25rem m-2 p-8">
        <h1 class="text-8xl text-800">PHAROS</h1>
      </div>
      <div class="flex h-2rem m-2">
        <span class="text-4xl text-600 underline">項目定義・DDL定義支援ツール</span>
      </div>
    </div>
  </div>
  <div class="card" style="height: 110px">
    <div class="flex flex-column card-container justify-content-center">
      <div
        class="flex h-7rem text-2xl text-600 px-5 mt-3 overflow-hidden text-overflow-ellipsis"
        style="height: 70px"
      >
        システム内部で使われる項目を一元管理し、DDL作成、OpenApi作成を支援するツールです。<br />
        ※PHAROS(パルス)は、ラテン語で「灯台」を意味します。土台となる情報を管理することで、プロジェクトの方向をしっかりと定められるようにするとの思いを込め名づけました。
      </div>
      <div class="text-right mx-2">
        <span class="text-base text-400">{{ version }}</span>
      </div>
      <div class="bg-bluegray-600 m-0 p-2 text-center">
        <span class="text-1xl text-white"
          >&copy;{{ copyRightYear }} <strong>{{ appName }} Project</strong></span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('@/assets/beforeLoginBackground.jpg');
}
</style>
