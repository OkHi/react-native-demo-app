import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoaderScreen} from './screens/Loader';
import {SignUpScreen} from './screens/SignUp';
import {HomeScreen} from './screens/Home';
import {RootStackParamList} from './routes';

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  const safeAreaStyle = {flex: 1, backgroundColor: '#f5f5f5'};
  return (
    <SafeAreaView style={safeAreaStyle}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen
            name="LoaderScreen"
            component={LoaderScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
