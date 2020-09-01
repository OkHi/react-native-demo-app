import {User} from './types';

export type RootStackParamList = {
  LoaderScreen: undefined;
  CreateAddressScreen: undefined;
  HomeScreen: {
    user: User;
  };
};
