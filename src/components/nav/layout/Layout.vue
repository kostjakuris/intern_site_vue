<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import Navbar from '@/components/nav/Navbar.vue';
import { ref } from 'vue';

const menuActive = ref(false);
const navActive = ref(false);
</script>
<template>
  <div>
    <Header
      :nav-active='navActive'
      :sign-active='menuActive'
      @update:set-sign-active='menuActive = !menuActive'
    />
    <Navbar
      :nav-active='navActive'
      @update:set-nav-active='navActive = true'
      :sign-active='menuActive'
    />
  </div>
</template>
