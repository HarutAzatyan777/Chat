// UserProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfileScreen = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // You can clear user session, navigate to login screen, etc.
    console.log('Logging out...');
    // Example: navigate to the LoginScreen after logout
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{user.name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{user.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
