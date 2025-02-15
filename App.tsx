import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './src/app'; // src/app/index.tsx'yi otomatik olarak alır.
import 'react-native-gesture-handler';


export default function MainApp() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
