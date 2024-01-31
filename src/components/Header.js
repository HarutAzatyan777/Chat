// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onBackPress, onLogoutPress }) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
          <Text style={styles.iconText}>{'< Back'}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>

      {onLogoutPress && (
        <TouchableOpacity onPress={onLogoutPress} style={styles.iconContainer}>
          <Text style={styles.iconText}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3498db', // Change the background color as needed
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    padding: 8,
  },
  iconText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Header;
