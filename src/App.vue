<script setup lang="ts">

import ConfigSection from './components/ConfigSection.vue'
import QRCodeSection from './components/QRCodeSection.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen relative overflow-hidden">


    <div class="flex w-[70%] gap-5 h-fit">
      <ConfigSection />
      <QRCodeSection />
    </div>
  </div>
</template>
