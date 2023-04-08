<script setup lang="ts">
import appHeader from '@/components/organisms/base/loginHeader.vue'
import appFooter from '@/components/organisms/base/footer.vue'
</script>

<template>
  <div>
    <app-header />
    <div class="bg" style="height: 610px">
      <slot />
    </div>
    <app-footer />
  </div>
</template>

<style scoped>
.bg {
  background-image: url('@/assets/beforeLoginBackground.jpg');
}
</style>
