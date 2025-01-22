import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from '../navigation/AuthNavigator'; // Doğru yolu kontrol edin.
import MainNavigator from '../navigation/MainNavigator'; // Doğru yolu kontrol edin.

const Stack = createNativeStackNavigator();

const App = () => {
  const isLoggedIn = false; // Oturum durumunu buradan kontrol edebilirsiniz.

  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default App;
