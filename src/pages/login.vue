<script setup lang="ts">
import loginForm from '@/components/organisms/card/loginForm.vue'
definePageMeta({
  layout: 'auth',
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
