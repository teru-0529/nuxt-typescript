<script setup lang="ts">
import appHeader from '@/components/organisms/base/welcomeHeader.vue'
import appFooter from '@/components/organisms/base/footer.vue'
import histories from '@/assets/releaseNote.json'

const versionInfo = computed((): string => {
  return `version ${histories[0].version} (released ${histories[0].releasedate})`
})
</script>

<template>
  <div>
    <app-header />
    <div class="card bg" style="height: 500px">
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
          <span class="text-base text-400">{{ versionInfo }}</span>
        </div>
      </div>
    </div>
    <app-footer v-bind:is-logged-in="false" />
  </div>
</template>

<style scoped>
.bg {
  background-image: url('@/assets/beforeLoginBackground.jpg');
}
</style>
