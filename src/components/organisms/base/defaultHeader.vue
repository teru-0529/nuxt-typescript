<script setup lang="ts">
import appLogo from '@/components/molecules/items/appLogo.vue'
import configMenu from '@/components/organisms/card/config.vue'
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
</script>

<template>
  <div class="card bg-primary-200 m-0 p-2">
    <div class="card">
      <div class="flex card-container overflow-hidden">
        <div class="flex-grow-1 flex">
          <app-logo
            v-bind:is-logged-in="true"
            v-bind:app-logo="baseStore.appLogo"
            v-bind:app-name="baseStore.appName"
          />
        </div>
        <div class="flex-none flex align-items-center mx-3">
          <div class="text-primary-700 mx-3">
            <p>{{ baseStore.versionInfo }}</p>
          </div>
          <configMenu />
        </div>
      </div>
    </div>
  </div>
</template>
