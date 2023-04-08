<script setup lang="ts">
import appHeader from '@/components/organisms/base/defaultHeader.vue'
import appFooter from '@/components/organisms/base/footer.vue'
</script>

<template>
  <div>
    <app-header />
    <div class="bg-primary-50" style="height: 610px">
      <slot />
    </div>
  </div>
</template>
