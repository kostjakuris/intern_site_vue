<script setup lang='ts'>
import './signInForm.css';
import { ref, watchEffect } from 'vue';
import { useUserStore } from '@/store/userStore';
import { useAuthStore } from '@/store/authStore';

const hidePassword = ref(false);
const wrongData = ref(false);
const userStore = useUserStore();
const authStore = useAuthStore();

const submitHandler = async(data: Record<string, string>) => {
  await authStore.logIn(Object.assign(data));
  await userStore.getData();
};
watchEffect(() => {
  if (userStore.message === 'Unauthenticated.') {
    wrongData.value = true;
  }
});
</script>
<template>
  <div class='main-content'>
    <div class='form-wrapper-signIn'>
      <FormKit :actions="false" type="form" @submit="submitHandler" outer-class='signIn__form'>
        <h2 class='form-wrapper__title-signIn'>Welcome back</h2>
        <p class='form-wrapper__info-signIn'>Welcome back! Please enter your details </p>
        <p :class="wrongData ? 'form-wrapper__errorText active' : 'form-wrapper__errorText'">You
          entered
          wrong email or password</p>
        <div class=' form__email'>
          <FormKit
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            input-class="email--signIn"
            message-class="form__label"
            validation="required | email"
          />
        </div>
        <div class='form__password'>
          <FormKit
            id="password"
            name="password"
            :type="hidePassword ? 'text' : 'password'"
            placeholder="Password"
            input-class='password--signIn'
            message-class="form__label"
            validation="required"
          />
          <span
            :class="hidePassword ? 'hiding__icon-signIn disabled' : 'hiding__icon-signIn'"
            @click="hidePassword = !hidePassword">
          <img src='img/mdi_eye.jpg' alt='eye' />
          </span>
        </div>
        <FormKit type="submit" input-class='submit__button-signIn'>
          Sign In
        </FormKit>
      </FormKit>
      <div class='account__info'>
        <p class='account__info-text'>
          Don`t have an account?
          <router-link to='/SignUp' class='account__info-link'>
            Sign Up
          </router-link>
        </p>
      </div>
    </div>
    <aside class='aside-content'>
      <div class='img__wrapper'>
        <img class='aside__img' src='img/twemoji_battery.jpg' alt='battery' />
      </div>
    </aside>
  </div>
</template>