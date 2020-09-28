import React from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Assets
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Constants
import { PUREWHITE, JUSTBLACK } from '../constants/colors';
import screenNames from '../constants/screenNames';

// Screens
import Discover from '../screens/discover/discover';
import ComingSoon from '../screens/comingSoon/comingSoon';

const iconNames = {
  [screenNames.DISCOVER]: {
    focused: 'home',
    default: 'home-outline',
  },
  [screenNames.DIRECTION]: {
    focused: 'location-arrow',
    default: 'location-arrow',
  },
  [screenNames.NOTIFICATION]: {
    focused: 'notifications',
    default: 'notifications-none',
  },
  [screenNames.BOOKMARK]: {
    focused: 'bookmark',
    default: 'bookmark-outline',
  },
  [screenNames.PROFILE]: {
    focused: 'account',
    default: 'account-outline',
  },
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const getStyle = (name) =>
  name === screenNames.DIRECTION
    ? {
        marginBottom: 20,
        borderWidth: 2,
      }
    : {};

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color }) => {
            let size = 30;
            let iconName;
            iconName = focused
              ? iconNames[route.name].focused
              : iconNames[route.name].default;
            // You can return any component that you like here!
            if (route.name == screenNames.DIRECTION) {
              return (
                <View
                  style={{
                    borderRadius: 35,
                    width: 70,
                    height: 70,
                    backgroundColor: PUREWHITE,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: 20,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                  }}>
                  <FontAwesome name={iconName} size={size} color={color} />
                </View>
              );
            }
            return route.name !== screenNames.NOTIFICATION ? (
              <Ionicons name={iconName} size={size} color={color} />
            ) : (
              <MaterialIcons name={iconName} size={size} color={color} />
            );
          },
        };
      }}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={screenNames.DISCOVER} component={Discover} />
      <Tab.Screen name={screenNames.NOTIFICATION} component={ComingSoon} />
      <Tab.Screen name={screenNames.DIRECTION} component={ComingSoon} />
      <Tab.Screen name={screenNames.BOOKMARK} component={ComingSoon} />
      <Tab.Screen name={screenNames.PROFILE} component={ComingSoon} />
    </Tab.Navigator>
  );
};

export default TabNav;
