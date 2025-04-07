<script setup lang="ts">
defineProps<{
  handleSubmit: (data: Record<string, string>) => Promise<void>
  hidePassword: boolean
  hideRePassword: boolean
}>();
defineEmits(['update:hidePassword', 'update:hideRePassword']);
</script>
<template>
  <div>
    <FormKit type="form" :actions="false" @submit="handleSubmit">
      <h2 class="form-wrapper-signUp__title">Sign Up</h2>
      <p class="form-wrapper-signUp__info">Please enter your details to continue</p>
      <div class="signUp__form">
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
        <div class=" form__email-signUp ">
          <FormKit
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            input-class="form--signUp email"
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
        <div class=" form__password-signUp ">
          <FormKit
            id="password"
            name="password"
            :type="hidePassword ? 'text' : 'password'"
            placeholder="Password"
            input-class="form--signUp password"
            message-class="form__label"
            validation="required"
          />
          <span
            :class="hidePassword ? 'hiding__icon-signUp disabled' : 'hiding__icon-signUp'"
            @click="$emit('update:hidePassword')">
              <img src="img/mdi_eye.jpg" alt="eye" />
              </span>
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
            @click="$emit('update:hideRePassword')">
              <img src="img/mdi_eye.jpg" alt="eye" />
              </span>
        </div>
      </div>
      <button class="submit__button-signUp" type="submit">
        Sign Up
      </button>
    </FormKit>
    <div class="account__info-signUp">
      <p class="account__info-signUp-text">
        Already have an account?
        <router-link to="/SignIn" class="account__info-signUp-link">
          Sign In
        </router-link>
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>