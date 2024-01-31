// api.js
const axios = require('axios');

const BASE_URL = 'https://api.example.com';

// Function to make a GET request
const getData = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error.response || error.message);
    throw error;
  }
};

// Function to make a POST request
const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error in POST request:', error.response || error.message);
    throw error;
  }
};

// Add more functions for different HTTP methods or specific API endpoints

module.exports = {
  getData,
  postData,
};
