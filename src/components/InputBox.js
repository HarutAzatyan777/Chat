// InputBox.js
import React, { useState } from 'react';
import { View, TextInput,Text, TouchableOpacity, StyleSheet } from 'react-native';

const InputBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#bdc3c7', // Adjust the border color as needed
    padding: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#3498db', // Adjust the button color as needed
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InputBox;
