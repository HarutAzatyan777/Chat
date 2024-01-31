// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import HomeScreen from '../screens/HomeScreen'; // Import HomeScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
