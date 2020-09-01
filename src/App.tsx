import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoaderScreen} from './screens/Loader';
import {CreateAddressScreen} from './screens/CreateAddress';

const Stack = createStackNavigator();

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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
