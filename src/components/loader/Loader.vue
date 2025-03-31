<template>
  <div class="loader__wrapper">
    <div class="loader">
      <VueSpinnerHourglass size="90" color="blue" />
      <p class="loader__text">Loading...</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import './Loader.css';
import { VueSpinnerHourglass } from 'vue3-spinners';
</script>