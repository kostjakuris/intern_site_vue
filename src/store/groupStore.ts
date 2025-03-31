import { defineStore } from 'pinia';
import { ref } from 'vue';
import { GroupData } from '@/components/interface/app.interface';
import { useUserStore } from '@/store/userStore';
import axios from 'axios';
import { backendUrl, setAuthHeader } from '@/http';

export const useGroupStore = defineStore('groupStore', () => {
    const userStore = useUserStore();
    const groups = ref<GroupData[]>([{
      id: undefined,
      name: null,
      administrator_id: null,
      created_at: null,
      updated_at: null,
    }]);
    
    const createGroup = (
      async({name}: GroupData) => {
        const persistedToken = userStore.accessToken;
        
        try {
          setAuthHeader(persistedToken);
          const res = await axios.post(`${backendUrl}/groups/create`, {
            name
          });
          groups.value = res.data.groups;
          return res.data;
          
        } catch (e: any) {
          userStore.message = e.response.data.message;
          return e.message;
          
        }
      });
    
    const getGroups =
      async() => {
        const persistedToken = userStore.accessToken;
        
        try {
          setAuthHeader(persistedToken);
          const res = await axios.get(`${backendUrl}/groups`, {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
          groups.value = res.data.groups;
          return res.data;
          
        } catch (e: any) {
          userStore.message = e.response.data.message;
          return e.message;
          
        }
      };
    
    const deleteGroup = async(id: number) => {
      const persistedToken = userStore.accessToken;
      try {
        setAuthHeader(persistedToken);
        const response = await axios.delete(`${backendUrl}/groups/delete`, {
          data: {
            id,
          },
        });
        groups.value = response.data.groups;
        return response.data;
      } catch (e: any) {
        userStore.message = e.response.data.message;
        return e.message;
        
      }
    };
    
    return {
      groups,
      createGroup,
      getGroups,
      deleteGroup
    };
  },
  {
    persist: {
      key: 'group-store',
    }
  }
);