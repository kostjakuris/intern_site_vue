<script setup lang="ts">
import { HookData } from '@/components/interface/app.interface';
import './Header.css';
import { useAuthStore } from '@/store/authStore';
import { useUserStore } from '@/store/userStore';

const props = defineProps<HookData>();
defineEmits(['update:setSignActive']);


const authStore = useAuthStore();
const userStore = useUserStore();
</script>
<template>
  <header class="header">
    <div class="block"></div>
    <div class="header__wrapper">
      <div class="header__img">
        <img class="header__img-icon" :src="userStore.user.avatar" alt="avatar" />
      </div>
      <div class="header__info">
        <div class="header__info-title">{{ userStore.user.role }}</div>
        <a href="mailto:" class="header__info-email">
          {{ userStore.user.email }}
        </a>
      </div>
      <span class="header__icon" @click.stop @click="$emit('update:setSignActive')">
        <img
          :class="props.signActive ? 'header__icon-image active' : 'header__icon-image'"
          src="icons/mdi_chevron-down.svg"
          alt="arrow"
        />
      </span>
      <div
        :class="props.signActive ? 'header__menu' : 'header__menu disabled'"
        @click.stop
      >
        <router-link to="/SignIn" class="header__button" @click="() => authStore.logOut()">
          <span class="button__img">
            <img class="button__img-icon" src="icons/codicon_sign-out.svg" alt="door" />
          </span>
          Sign out
        </router-link>
      </div>
    </div>
  </header>
</template>