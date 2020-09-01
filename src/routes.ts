import {User} from './types';

export type RootStackParamList = {
  LoaderScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: {
    user: User;
  };
};
