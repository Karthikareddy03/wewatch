// src/apis/images.js
import apiRequest from '.';

export const UploadImage = async (payload, token) => {
  return await apiRequest({
    method: 'POST',
    endPoint: '/api/images/upload-image',
    payload,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};
