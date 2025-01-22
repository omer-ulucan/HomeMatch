// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useAuth } from '../hooks/useAuth'; // useAuth hook'u

const AppNavigator = () => {
  const { isLoggedIn } = useAuth(); // Giriş durumunu kontrol et

  return (
    <NavigationContainer>
      {/* Kullanıcının giriş yapıp yapmadığını kontrol ederek uygun navigasyonu göster */}
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
