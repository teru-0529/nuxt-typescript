<script setup lang="ts">
import appLogo from '@/components/molecules/items/appLogo.vue'
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
</script>

<template>
  <div class="card bg-gray-100 m-0 p-2">
    <div class="card">
      <div class="flex card-container overflow-hidden">
        <div class="flex-grow-1 flex">
          <app-logo
            v-bind:is-logged-in="false"
            v-bind:app-logo="baseStore.appLogo"
            v-bind:app-name="baseStore.appName"
          />
        </div>
      </div>
    </div>
  </div>
</template>
