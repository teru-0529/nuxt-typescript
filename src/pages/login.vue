<script setup lang="ts">
import loginForm from '@/components/login/loginFormCard.vue'
definePageMeta({
  layout: 'login',
})
</script>

<template>
  <div class="card">
    <div
      class="flex justify-content-center align-content-center flex-wrap card-container"
      style="min-height: 500px"
    >
      <div class="flex align-items-center justify-content-center">
        <login-form />
      </div>
    </div>
  </div>
</template>
