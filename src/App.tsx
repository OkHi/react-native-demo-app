import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoaderScreen} from './screens/Loader';
import {CreateAddressScreen} from './screens/CreateAddress';
import {HomeScreen} from './screens/Home';
import {RootStackParamList} from './routes';

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoaderScreen"
          component={LoaderScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="CreateAddressScreen"
          component={CreateAddressScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
