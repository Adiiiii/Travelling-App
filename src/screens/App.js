/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import Home from './home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screenNames from '../constants/screenNames';
import TabNav from '../navigation/discoverTabNavigator';

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={screenNames.HOME} component={Home} />
      <Stack.Screen
        name={screenNames.TAB}
        component={TabNav}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
            height: 100,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
