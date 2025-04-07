<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import { ref } from 'vue';
import "./Main.css";
const userStore = useUserStore();
const modalActive = ref(false)
</script>
<template>
  <main class="main-page" @click="">
    <section class="main-page__info">
      <div class="page-info__icon">
        <img class="page-info__img" :src="userStore.user ? userStore.user.avatar : ''"
          alt="avatar" />
        <p class="page-info__username">
          {{userStore.user.name}} {{ userStore.user.surname}}
        </p>
      </div>
      <!--    <Modal-->
      <!--      active={modalActive}-->
      <!--      setActive={setModalActive}-->
      <!--      activeClassName="modal__content active"-->
      <!--      class="modal__content"-->
      <!--    />-->
      <button class="main-page-info__edit" @click="modalActive = true">
        Edit profile
      </button>
    </section>
    <section class="main-page__data">
      <div class="main-page__nav">
        <div class="page__nav-list">
          <button class="page__nav-link active">
            About
          </button>
        </div>
      </div>
      <div class="main-page__personal-data">
        <h4 class="personal-data__header">Personal information</h4>
        <div class="personal-data__wrapper">
          <div class="personal-data__left personal-data--mobile">
            <div class="personal-data__role personal-data__padding">
              <p class="personal-data__title">Role</p>
              <p class="personal-data__info" v-if="userStore">{{ userStore.user.role }}</p>
            </div>
            <div class="personal-data__phonenumber personal-data__padding">
              <p class="personal-data__title">Phone number</p>
              <p class="personal-data__info" v-if="userStore">{{ userStore.user.phone_number }}</p>
            </div>
          </div>
          <div class="personal-data__center personal-data--mobile">
            <div class="personal-data__email personal-data__padding">
              <p class="personal-data__title">Email</p>
              <p class="personal-data__info personal-data__desktop-email" v-if="userStore">
                {{ userStore.user.email }}</p>
              <p class="personal-data__info personal-data__mobile-email personal-data__padding"
                v-if="userStore">
                {{ userStore.user.email }}
              </p>
            </div>
            <div class="personal-data__adress personal-data__padding">
              <p class="personal-data__title">Address</p>
              <p class="personal-data__info " v-if="userStore">{{ userStore.user.address }}</p>
            </div>
          </div>
          <div class="personal-data__right personal-data--mobile">
            <div class="personal-data__country personal-data__padding">
              <p class="personal-data__title">Country</p>
              <p class="personal-data__info" v-if="userStore">{{ userStore.user.country }}</p>
            </div>
            <div class="personal-data__town personal-data__padding">
              <p class="personal-data__title">Town</p>
              <p class="personal-data__info" v-if="userStore">{{ userStore.user.city }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>