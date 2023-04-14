<script setup lang="ts">
import appLogo from '@/components/molecules/items/appLogo.vue'

const onLoginClick = () => {
  return navigateTo({ path: '/login' })
}
</script>

<template>
  <div class="card bg-gray-100 m-0 p-2">
    <div class="card">
      <div class="flex card-container overflow-hidden">
        <div class="flex-grow-1 flex">
          <app-logo v-bind:is-logged-in="false" />
        </div>
        <div class="flex-none flex align-items-center mx-3">
          <Button
            label="ログイン"
            severity="secondary"
            size="large"
            outlined
            v-on:click="onLoginClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
