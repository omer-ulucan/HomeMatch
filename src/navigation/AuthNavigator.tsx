import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/login/LoginScreen';
import {OnboardingScreen} from '../screens/auth/onboarding/OnboardingScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
