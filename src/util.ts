import {CommonActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './routes';

export const resetNavigation = (
  route: string,
  navigation: any,
  params?: object,
) => {
  const reset = CommonActions.reset({
    index: 0,
    routes: [{name: route, params}],
  });
  navigation.dispatch(reset);
};
