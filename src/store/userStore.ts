import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { CreateUserData, CreateUserGridData, SignInFormData, ValuesData } from '@/components/interface/app.interface';
import { backendUrl, setAuthHeader } from '@/http';
import { useAuthStore } from '@/store/authStore';


export const useUserStore = defineStore('userStore', () => {
    const authStore = useAuthStore();
    const signInUser = ref<SignInFormData>({
      email: null,
      password: null,
    });
    
    const user = ref<CreateUserData>({
      id: null,
      name: null,
      surname: null,
      email: null,
      role: null,
      password: null,
      country: null,
      city: null,
      address: null,
      phone_number: null,
      avatar: undefined,
    });
    
    const users = ref<CreateUserGridData[]>([{
      id: null,
      name: null,
      surname: null,
      email: null,
      role: null,
      country: null,
      city: null,
      address: null,
      created_at: null,
      updated_at: null,
    }]);
    
    const refreshToken = ref<string | null>(null);
    
    const accessToken = ref<string | null>(null);
    
    const isLoggedIn = ref<boolean>(false);
    
    const message = ref<string | null>(null);
    
    const createUser = async({
      name,
      surname,
      email,
      role,
      password,
      country,
      city,
      address,
      administrator_id
    }: CreateUserGridData) => {
      const persistedToken = accessToken.value;
      try {
        setAuthHeader(persistedToken);
        const response = await axios.post(
          `${backendUrl}/users/create-user`, {
            name,
            surname,
            email,
            role,
            password,
            country,
            city,
            address,
            administrator_id,
            phone_number: '3 (554) 123-4517',
          });
        users.value = response.data.users;
        return response.data;
      } catch (event: any) {
        message.value = event.response.data.message;
        return event.message;
        
      }
    };
    
    const editUser = (
      async({name, surname, email, password, country, city, address, phone_number}: ValuesData) => {
        const persistedToken = accessToken.value;
        const id = user.value.id;
        
        try {
          setAuthHeader(persistedToken);
          const response = await axios.put(
            `${backendUrl}/users/update-user-info`, {
              id,
              name,
              surname,
              email,
              password,
              country,
              city,
              address,
              phone_number
            });
          user.value = response.data.user;
          return response.data;
        } catch (e: any) {
          message.value = e.response.data.message;
          return e.message;
          
        }
      }
    );
    
    const deleteUser = (async(id: number) => {
      const persistedToken = accessToken.value;
      try {
        setAuthHeader(persistedToken);
        const response = await axios.delete(`${backendUrl}/users/delete-user`, {
          data: {
            id,
          },
        });
        users.value = response.data.users;
        return response.data;
      } catch (e: any) {
        message.value = e.response.data.message;
        return e.message;
        
      }
    });
    
    const getData = async() => {
      const persistedToken = accessToken.value;
      authStore.isLoading = true;
      
      try {
        setAuthHeader(persistedToken);
        const response = await axios.get(`${backendUrl}/users/user-info`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        user.value = response.data.user;
        isLoggedIn.value = true;
        return response.data;
      } catch (e: any) {
        message.value = e.response.data.message;
        isLoggedIn.value = false;
        return e.message;
        
      } finally {
        authStore.isLoading = false;
      }
    };
    
    const getUsers = async() => {
      const persistedToken = accessToken.value;
      
      try {
        setAuthHeader(persistedToken);
        const response = await axios.get(`${backendUrl}/users`, {});
        users.value = response.data.users;
        return response.data;
        
      } catch (e: any) {
        message.value = e.response.data.message;
        return e.message;
        
      }
    };
    
    const editGridUser =
      
      async({id, name, surname, email, password, country, city, address}: ValuesData) => {
        const persistedToken = accessToken.value;
        
        try {
          setAuthHeader(persistedToken);
          const response = await axios.put(
            `${backendUrl}/users/update-user-info`, {
              id,
              name,
              surname,
              email,
              password,
              country,
              city,
              address,
            });
          users.value = response.data.users;
          return response.data;
          
        } catch (e: any) {
          message.value = e.response.data.message;
          return e.message;
        }
      };
    
    return {
      signInUser,
      user,
      users,
      refreshToken,
      accessToken,
      isLoggedIn,
      message,
      createUser,
      editUser,
      deleteUser,
      getData,
      editGridUser,
      getUsers
    };
  },
  {
    persist: {
      key: 'user-store',
    }
  },
);

