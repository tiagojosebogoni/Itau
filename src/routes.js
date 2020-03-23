import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      headerLayoutPreset="center"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#FFF',
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'SignIn' }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Dashboard' }}
      />
    </Stack.Navigator>
  );
}
