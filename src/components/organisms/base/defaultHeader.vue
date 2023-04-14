<script setup lang="ts">
import appLogo from '@/components/molecules/items/appLogo.vue'
import configMenu from '@/components/organisms/card/config.vue'
import histories from '@/assets/releaseNote.json'
import menus from '@/assets/menu.json'
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()

const versionInfo = computed((): string => {
  return `version ${histories[0].version} (released ${histories[0].releasedate})`
})

const menuInfo = computed(() => {
  return menus
})
</script>

<template>
  <div class="bg-primary-200 m-0 p-2">
    <div class="card">
      <div class="flex card-container overflow-hidden">
        <div class="flex-none flex mx-3">
          <app-logo v-bind:is-logged-in="true" />
        </div>
        <div class="flex-grow-1 flex align-items-left">
          <Menubar class="bg-primary-200 border-none" :model="menuInfo" />
        </div>
        <div class="flex-none flex align-items-center mx-3">
          <div v-if="baseStore.activeContents">
            <Tag
              class="text-lg border-round-xl font-semibold"
              icon="pi pi-check"
              v-bind:value="baseStore.activeContents"
              v-bind:class="{
                'bg-indigo-600': !baseStore.isConfigContents,
                'bg-pink-500': baseStore.isConfigContents,
              }"
            ></Tag>
          </div>
          <div class="text-primary-700 mx-3">
            <p>{{ versionInfo }}</p>
          </div>
          <configMenu />
        </div>
      </div>
    </div>
  </div>
</template>
