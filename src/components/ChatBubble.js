// ChatBubble.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message, isCurrentUser }) => {
  const bubbleStyle = isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble;
  const textStyle = isCurrentUser ? styles.currentUserText : styles.otherUserText;

  return (
    <View style={[styles.bubble, bubbleStyle]}>
      <Text style={textStyle}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '70%', // Adjust the maximum width of the bubble as needed
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  currentUserBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#3498db', // Bubble color for the current user
  },
  otherUserBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#ecf0f1', // Bubble color for other users
  },
  currentUserText: {
    color: 'white', // Text color for the current user
  },
  otherUserText: {
    color: 'black', // Text color for other users
  },
});

export default ChatBubble;
