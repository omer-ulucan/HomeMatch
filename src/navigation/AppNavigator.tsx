import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
  const isLoggedIn = false; // Bu kısımda gerçek auth kontrolünü ekle

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
