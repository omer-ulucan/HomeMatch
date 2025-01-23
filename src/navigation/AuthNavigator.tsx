import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "../screens/auth/onboarding/OnboardingScreen";
import { TenantProfileForm } from "../screens/auth/tenant_profile/TenantProfileForm";
import { LandlordProfileForm } from "../screens/auth/landlord_profile/LandlordProfileForm";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="TenantProfile" component={TenantProfileForm} />
      <Stack.Screen name="LandlordProfile" component={LandlordProfileForm} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
