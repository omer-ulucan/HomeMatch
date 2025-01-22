import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/Main/Main';
import { PropertyDetailsForm } from '../screens/auth/ProfileDetails/PropertyDetailsForm';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Profile" component={PropertyDetailsForm} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
