// chatService.js
import { v4 as uuidv4 } from 'uuid';

const chatService = {
  // Simulate receiving messages from a chat server
  getMessages: () => {
    // Replace this with your actual API call or real-time communication logic
    return new Promise((resolve) => {
      setTimeout(() => {
        const messages = [
          { _id: uuidv4(), text: 'Hello!', isCurrentUser: false },
          { _id: uuidv4(), text: 'Hi there!', isCurrentUser: true },
        ];
        resolve(messages);
      }, 1000); // Simulate delay for fetching messages
    });
  },

  // Simulate sending a message to the chat server
  sendMessage: async (text) => {
    // Replace this with your actual API call or real-time communication logic
    return new Promise((resolve) => {
      setTimeout(() => {
        const newMessage = { _id: uuidv4(), text, isCurrentUser: true };
        resolve(newMessage);
      }, 500); // Simulate delay for sending a message
    });
  },
};

export default chatService;
