<script setup lang="ts">
import appLogo from '@/components/login/appLogo.vue'

const onLoginClick = async () => {
  console.log('おしたぜ！')
  // await navigateTo({ path: '/login', replace: true })
}
</script>

<template>
  <div class="card bg-gray-100 m-0 p-2">
    <div class="card">
      <div class="flex card-container overflow-hidden">
        <div class="flex-grow-1 flex">
          <app-logo />
        </div>
        <div class="flex-none flex align-items-center mx-3">
          <!-- <NuxtLink to="/login">ログイン</NuxtLink> -->
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
