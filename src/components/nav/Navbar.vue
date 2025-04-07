<script setup lang="ts">
import { NavContent } from '@/App.vue';
import './Nav.css';

const props = defineProps<NavContent>();
defineEmits(['update:setNavActive']);
</script>
<template>
  <div>
    <div class="main__nav">
      <div class="header__nav-open">
        <span class="header__nav-icon">
          <img src="icons/Group.svg" alt="menu" />
        </span>
      </div>
      <div class="header__nav-open--mobile" @click.stop>
        <span
          :class="props.navActive ? 'header__nav-icon active' : 'header__nav-icon'"
          @click="$emit('update:setNavActive')"
        >
          <img src="icons/Group.svg" alt="menu" />
        </span>
      </div>
    </div>
    <nav
      :class="props.navActive ? 'main__nav--mobile active' : 'main__nav--mobile'"
      @click.stop
    >
      <div class="main__nav-buttons">
        <router-link class="main__nav-button" to='/'>
          <span class="main__nav-icon">
            <img class="main__nav-img" src="icons/icomoon-free_profile.svg" alt="profile" />
          </span>
          Profile
        </router-link>
        <router-link class="main__nav-button" to='/devices'>
          <span class="main__nav-icon">
            <img class="main__nav-img" src="icons/clarity_devices-line.svg" alt="devices" />
          </span>
          Devices
        </router-link>
        <router-link class="main__nav-button" to="/users">
          <span class="main__nav-icon">
            <img class="main__nav-img" src="icons/heroicons_users-solid.svg" alt="users" />
          </span>
          Users
        </router-link>
        <router-link class="main__nav-button" to="/groups">
          <span class="main__nav-icon">
            <img class="main__nav-img" src="icons/ic_baseline-important-devices.svg" alt="groups" />
          </span>
          Groups
        </router-link>
      </div>
    </nav>
  </div>
</template>
