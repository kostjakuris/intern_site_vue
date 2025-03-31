<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Loader from '@/components/loader/Loader.vue';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';

const loading = ref<boolean>(false);
const menuActive = ref(false);
const navActive = ref(false);
const router = useRouter();
const store = useUserStore();

export type NavContent = {
  navActive: boolean;
  setNavActive: (navActive: boolean) => void;
  signActive: boolean;
  setSignActive: (signActive: boolean) => void;
};

watchEffect(() => {

  if (store.isLoggedIn) {
    router.replace('/');
  } else {
    router.replace('/SignIn');
    window.history.replaceState(null, '', window.location.href);
  }
});


</script>
<template>
  <Loader v-if="loading" />
  <div v-else>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>