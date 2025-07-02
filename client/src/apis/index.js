// src/apis/index.js or src/apis/apiRequest.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const apiRequest = async ({ method, endPoint, payload, queryString, headers = {} }) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${endPoint}`,
      data: payload,
      params: queryString,
      headers,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error.message || 'Something went wrong'
    );
  }
};

export default apiRequest;
