// ChatScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import ChatBubble from '../components/ChatBubble';
import InputBox from '../components/InputBox';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    // Scroll to the bottom when messages are updated
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { _id: prevMessages.length + 1, text: newMessage, isCurrentUser: true },
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {messages.map((message) => (
          <ChatBubble key={message._id} message={message} isCurrentUser={message.isCurrentUser} />
        ))}
      </ScrollView>
      <InputBox onSendMessage={handleSendMessage} />
    </View>
  );
};

export default ChatScreen;
