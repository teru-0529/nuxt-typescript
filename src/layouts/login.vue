<script setup lang="ts">
import appHeader from '@/components/organisms/base/loginHeader.vue'
import appFooter from '@/components/organisms/base/footer.vue'
</script>

<template>
  <div>
    <app-header />
    <div class="bg-gray-50" style="height: 610px">
      <slot />
    </div>
    <app-footer />
  </div>
</template>
