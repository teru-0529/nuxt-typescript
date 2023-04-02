<script setup lang="ts">
import appHeader from '@/components/base/header.vue'
import appFooter from '@/components/base/footer.vue'
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
