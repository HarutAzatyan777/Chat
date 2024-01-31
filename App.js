// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeScreen from './src/screens/HomeScreen'; // Import HomeScreen
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Simulating authentication logic
    // In a real app, this could involve checking if the user is logged in
    // based on a token or other authentication mechanism.
    // For now, let's assume the user is logged out initially.
    setUserLoggedIn(true); // Set to true for testing HomeScreen, change to false for actual authentication logic
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userLoggedIn ? (
          <AppNavigator />
        ) : (
          <AuthNavigator initialRouteName="Signup" />
        )}
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
