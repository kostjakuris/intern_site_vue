export type DeviceFormData = {
  id?: number | null;
  owner_id?: string | null;
  name: string | null;
  device_type: string | null;
  owner_email: string | null;
  serial_number: string | null;
  country: string | null;
  city: string | null;
  address: string | null;
  phase_active?: boolean | null;
  phase_type?: string | null;
  sum_power?: number | null;
  group_id: string | null;
  location?: string | null;
};

export type FormData = {
  name?: string;
  surname?: string;
  email?: string;
  role?: string;
  password?: string;
  country?: string;
  city?: string;
  rePassword?: string;
  address?: string;
  phone_number?: string;
};

export type CreateUserData = {
  id: number | null;
  name: string | null;
  surname: string | null;
  email: string | null;
  role: string | null;
  password: string | null;
  country: string | null;
  city: string | null;
  address: string | null;
  phone_number: string | null;
  avatar: string | undefined;
  
};

export type CreateUserGridData = {
  id: number | null;
  name: string | null;
  surname: string | null;
  email: string | null;
  role: string | null;
  country: string | null;
  city: string | null;
  password?: string | null;
  address: string | null;
  phone_number?: string | null;
  administrator_id?: number | null;
  created_at: string | null;
  updated_at: string | null;
};

export type ValuesData = {
  id?: number;
  name: string | null;
  surname: string | null;
  email: string | null;
  role?: string | null;
  country: string | null;
  city: string | null;
  password: string | null;
  address: string | null;
  phone_number?: string | null;
};

export type SignInFormData = {
  email: string | null;
  password: string | null;
};

export type AddGridGridData = {
  headerName?: string;
  field?: string;
  checkboxSelection?: boolean;
  headerCheckboxSelection?: boolean;
  rowGroupPanelShow?: string;
};

export type HookData = {
  signActive: boolean;
  navActive: boolean;
  addGridActive?: boolean;
  group_id?: number;
  groupDevices?: any[];
  groupData?: any[];
  rowData?: AddGridGridData[] | undefined;
  setRowData?: (rowData: AddGridGridData[] | undefined) => void;
  // content?: React.ReactNode;
};


export type GroupData = {
  id: number | undefined;
  name: string | null;
  administrator_id: string | null;
  created_at: string | null;
  updated_at: string | null;
};

