import 'react-native-gesture-handler';
import * as React from 'react';
import Home from './home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screenNames from '../constants/screenNames';
import TabNav from '../navigation/discoverTabNavigator';
import { decode, encode } from 'base-64';
import Authentication from './authentication/authentication';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={screenNames.HOME} component={Home} />
      <Stack.Screen
        name={screenNames.AUTHENTICATION}
        component={Authentication}
      />
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
