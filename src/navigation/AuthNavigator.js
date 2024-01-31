// AuthNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { AuthRoutes } from '../routes'; // Import the AuthRoutes from routes.js

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthRoutes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={AuthRoutes.SIGNUP} component={SignupScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
