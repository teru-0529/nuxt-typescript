<script setup lang="ts">
import appHeader from '@/components/login/header.vue'
import appFooter from '@/components/login/footer.vue'
</script>

<template>
  <div>
    <app-header />
    <!-- <div style="height: 560px"> -->
    layoutLogin.vue
    <slot />
    <!-- </div> -->
    <app-footer />
  </div>
</template>
