import {OkHiLocation} from '@okhi/react-native-core';

export type User = {
  firstName: string;
  lastName: string;
  phone: string;
  id?: string;
};

export type Address = OkHiLocation & {verifying: boolean};
