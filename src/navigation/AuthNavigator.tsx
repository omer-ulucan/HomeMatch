import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from '../screens/auth/onboarding/OnboardingScreen';
import  TenantProfileForm  from '../screens/auth/tenant_profile/TenantProfileForm';
import { LandlordProfileForm } from '../screens/auth/landlord_profile/LandlordProfileForm';
import { PropertyDetailsForm } from '../screens/auth/ProfileDetails/PropertyDetailsForm'; // Yeni ekranı import edin
import  MainLayout  from '../components/ProfileViewer/MainLayout';
import HousingInfo from '../components/HousingInfo/HousingInfo';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="TenantProfile" component={TenantProfileForm} />
      <Stack.Screen name="LandlordProfileForm" component={LandlordProfileForm} />
      <Stack.Screen name="PropertyDetailsForm" component={PropertyDetailsForm} /> 
      <Stack.Screen name="MainLayout" component={MainLayout} />
      <Stack.Screen name="HousingInfo" component={HousingInfo} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
