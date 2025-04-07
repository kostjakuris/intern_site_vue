<script setup lang="ts">
import '../signUpForm.css';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore';
import SignUpMobile from '@/components/signUpForm/mobile/SignUpMobile.vue';

const router = useRouter();
const hidePassword = ref(false);
const hideRePassword = ref(false);
const authStore = useAuthStore();

const handleSubmit = async(data: Record<string, string>) => {
  await authStore.register(Object.assign(data));
  await router.push('/SignIn');
};
</script>
<template>
  <main class="main">
    <div class="main-content">
      <div class="form-wrapper-signUp ">
        <FormKit type="form" :actions="false" @submit="handleSubmit">
          <h2 class="form-wrapper-signUp__title">Sign Up</h2>
          <p class="form-wrapper-signUp__info">Please enter your details to continue</p>
          <div class="signUp__form">
            <div class="left__form">
              <div class=" form__firstname ">
                <FormKit
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Firstname"
                  input-class="form--signUp firstName"
                  message-class="form__label"
                  validation="required"
                />
              </div>
              <div class=" form__email-signUp ">
                <FormKit
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  input-class="form--signUp email"
                  message-class="form__label"
                  validation="required | email"
                />
              </div>
              <div class=" form__country ">
                <FormKit
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  input-class="form--signUp country"
                  message-class="form__label"
                  validation="required"
                />
              </div>
              <div class=" form__password-signUp ">
                <FormKit
                  id="password"
                  name="password"
                  :type="hidePassword ? 'text': 'password'"
                  placeholder="Password"
                  input-class="form--signUp password"
                  message-class="form__label"
                  validation="required"
                />
                <span
                  :class="hidePassword ? 'hiding__icon-signUp disabled' :'hiding__icon-signUp'"
                  @click="hidePassword = !hidePassword">
                <img src="img/mdi_eye.jpg" alt="eye" />
                </span>
              </div>
              <div class=" form__adress ">
                <FormKit
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  input-class="form--signUp adress"
                  message-class="form__label"
                  validation="required"
                />
              </div>
            </div>
            <div class="right__form">
              <div class=" form__lastname">
                <FormKit
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Lastname"
                  input-class="form--signUp lastName"
                  message-class="form__label"
                  validation="required"
                />
              </div>
              <div class=" form__phoneNumber ">
                <FormKit
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  placeholder="Phone number"
                  input-class="form--signUp phoneNumber"
                  message-class="form__label"
                  validation="required"
                />
              </div>
              <div class=" form__town ">
                <FormKit
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Town"
                  input-class="form--signUp town"
                  message-class="form__label"
                  validation="required"
                />
              </div>
              <div class=" form__rePassword-signUp ">
                <FormKit
                  id="rePassword"
                  name="rePassword"
                  :type="hideRePassword ? 'text' : 'password'"
                  placeholder="Re-password"
                  input-class="form--signUp rePassword"
                  message-class="form__label"
                  validation="required | confirm"
                />
                <span
                  :class="hideRePassword ? 'hiding__icon-signUp disabled' : 'hiding__icon-signUp'"
                  @click="hideRePassword = !hideRePassword">
                <img src="img/mdi_eye.jpg" alt="eye" />
                </span>
              </div>
            </div>
          </div>
          <FormKit input-class="submit__button-signUp" type="submit">
            Sign Up
          </FormKit>
        </FormKit>
        <div class="account__info-signUp">
          <p class="account__info-signUp-text">
            Already have an account?
            <router-link to="/SignIn" class="account__info-link">
              Sign In
            </router-link>
          </p>
        </div>
      </div>
      <SignUpMobile
        class="form-wrapper-signUp--mobile"
        :handle-submit="handleSubmit"
        :hide-password="hidePassword"
        :hide-re-password="hideRePassword"
        @update:hidePassword="hidePassword = !hidePassword"
        @update:hideRePassword="hideRePassword = !hideRePassword"
      />
      <aside class="aside-content--signUp">
        <div class="img__wrapper">
          <img class="aside__img" src="img/twemoji_battery.jpg" alt="batery" />
        </div>
      </aside>
    </div>
  </main>
</template>
