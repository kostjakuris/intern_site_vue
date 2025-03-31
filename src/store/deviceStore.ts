import { defineStore } from 'pinia';
import { ref } from 'vue';
import { DeviceFormData } from '@/components/interface/app.interface';
import { useUserStore } from '@/store/userStore';
import axios from 'axios';
import { backendUrl, setAuthHeader } from '@/http';

export const useDeviceStore = defineStore('deviceStore', () => {
    const userStore = useUserStore();
    const devices = ref<DeviceFormData[]>([{
      serial_number: null,
      device_type: null,
      owner_email: null,
      name: null,
      country: null,
      city: null,
      address: null,
      group_id: null
    }]);
    
    const createDevice = (
      async({name, device_type, address, serial_number, group_id, owner_id}: DeviceFormData) => {
        const newGroupId = group_id ? Number(group_id) : 1;
        const newOwnerId = Number(owner_id);
        const persistedToken = userStore.accessToken;
        try {
          setAuthHeader(persistedToken);
          const response = await axios.post(`${backendUrl}/devices/create`,
            {
              owner_id: newOwnerId,
              name,
              device_type,
              address,
              serial_number,
              phase_active: true,
              phase_type: 'laptop',
              sum_power: 155.9,
              group_id: newGroupId,
              location: '{}',
              administrator_id: 5,
            }
          );
          devices.value = response.data.devices;
          return response.data;
          
        } catch (e: any) {
          userStore.message = e.response.data.message;
          return e.message;
          
        }
      }
    );
    const deleteDevice = (async(id: number) => {
      const persistedToken = userStore.accessToken;
      try {
        setAuthHeader(persistedToken);
        const response = await axios.delete(`${backendUrl}/devices/delete`, {
          data: {
            id,
          },
        });
        devices.value = response.data.devices;
        return response.data;
      } catch (e: any) {
        userStore.message = e.response.data.message;
        return e.message;
        
      }
    });
    
    const editDevice = (
      async({id, name, device_type, country, city, address, serial_number, group_id}: DeviceFormData) => {
        const persistedToken = userStore.accessToken;
        const newGroupId = group_id ? Number(group_id) : 1;
        try {
          setAuthHeader(persistedToken);
          const response = await axios.put(`${backendUrl}/devices/edit`, {
            id,
            name,
            device_type,
            country,
            city,
            address,
            serial_number,
            group_id: newGroupId,
          });
          devices.value = response.data.devices;
          return response.data;
          
        } catch (e: any) {
          userStore.message = e.response.data.message;
          return e.message;
          
        }
      }
    );
    
    const getDevices = async () => {
      const persistedToken = userStore.accessToken;
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get(`${backendUrl}/devices`, {
          headers : {
            "Content-Type" : "application/json",
            Accept : "application/json",
          },
        });
        devices.value = res.data.devices;
        return res.data;
        
      } catch (e: any) {
        userStore.message = e.response.data.message;
        return e.message;
        
      }
    };
    
    return {
      devices,
      createDevice,
      deleteDevice,
      editDevice,
      getDevices
    };
  },
  {
    persist: {
      key: 'device-store',
    }
  }
);