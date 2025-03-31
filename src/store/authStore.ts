import { defineStore } from 'pinia';
import { ref } from 'vue';
import { CreateUserData, SignInFormData } from '@/components/interface/app.interface';
import { useUserStore } from '@/store/userStore';
import axios from 'axios';
import { backendUrl, clearAuthHeader, setAuthHeader } from '@/http';
import { useDeviceStore } from '@/store/deviceStore';
import { useGroupStore } from '@/store/groupStore';

export const useAuthStore = defineStore('authStore', () => {
    const userStore = useUserStore();
    const deviceStore = useDeviceStore();
    const groupStore = useGroupStore();
    const isLoading = ref<boolean>(false);
    
    const register =
      async({name, surname, email, password, country, city, address, phone_number}: CreateUserData) => {
        isLoading.value = true;
        try {
          const response = await axios.post(`${backendUrl}/auth/register`, {
            name,
            surname,
            email,
            role: 'customer',
            password,
            country,
            city,
            address,
            phone_number,
          });
          userStore.user = response.data;
          return response.data;
        } catch (e: any) {
          userStore.message = e.response.data.message;
          return e.message;
          
        } finally {
          isLoading.value = false;
        }
      };
    
    const logIn = async({email, password}: SignInFormData) => {
      isLoading.value = true;
      try {
        const response = await axios.post(`${backendUrl}/auth/login`, {
          email,
          password,
        });
        setAuthHeader(response.data.accessToken);
        userStore.signInUser = response.data.signInUser;
        userStore.accessToken = response.data.accessToken;
        userStore.refreshToken = response.data.refreshToken;
        return response.data;
      } catch (e: any) {
        userStore.message = e.response.data.message;
        return e.message;
        
      } finally {
        isLoading.value = false;
      }
    };
    
    const logOut = async() => {
      clearAuthHeader();
      userStore.$reset();
      deviceStore.$reset();
      groupStore.$reset();
    };
    
    return {
      isLoading,
      register,
      logIn,
      logOut
    };
  },
  {
    persist: {
      key: 'auth-store',
    }
  }
);