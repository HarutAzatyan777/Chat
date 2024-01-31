// authService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_TOKEN_KEY = 'userToken';

const authService = {
  // Simulate a login by storing a user token in AsyncStorage
  login: async (email, password) => {
    try {
      // Replace this with your actual authentication logic
      const userToken = 'yourGeneratedToken'; // Replace with actual user token
      await AsyncStorage.setItem(USER_TOKEN_KEY, userToken);
      return userToken;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  // Simulate a logout by removing the user token from AsyncStorage
  logout: async () => {
    try {
      await AsyncStorage.removeItem(USER_TOKEN_KEY);
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  },

  // Check if the user is logged in based on the presence of the user token
  isLoggedIn: async () => {
    try {
      const userToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
      return !!userToken; // Returns true if the user is logged in, false otherwise
    } catch (error) {
      console.error('Error checking login status:', error);
      throw error;
    }
  },

  // Get the user token from AsyncStorage
  getUserToken: async () => {
    try {
      return await AsyncStorage.getItem(USER_TOKEN_KEY);
    } catch (error) {
      console.error('Error getting user token:', error);
      throw error;
    }
  },
};

export default authService;
