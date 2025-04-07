<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Loader from '@/components/loader/Loader.vue';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

const router = useRouter();
const store = useUserStore();
const authStore = useAuthStore();

export type NavContent = {
  navActive: boolean;
  signActive: boolean;
};

const menuActive = ref(false);
const navActive = ref(false);

function changeNavState() {
  if (menuActive.value) {
    menuActive.value = false;
  }
  if (navActive.value) {
    navActive.value = false;
  }
}

watchEffect(() => {
  if (store.isLoggedIn) {
    router.push('/');
  } else if (!window.location.href.includes('/SignUp')) {
    router.push('/SignIn');
  }
});
</script>
<template>
  <Loader v-if="authStore.isLoading" />
  <div v-else @click="changeNavState">
    <router-view name="NavBar"></router-view>
    <router-view />
  </div>
</template>