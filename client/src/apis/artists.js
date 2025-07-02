// src/apis/artists.js
import apiRequest from '.';
import axios from 'axios';

export const AddArtist = async (payload, token) => {
  return await apiRequest({
    method: 'POST',
    endPoint: '/api/artists/add1',
    payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const GetAllArtists = async (token) => {
  const response = await axios.get('/api/artists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const GetArtistById = async (id, token) => {
  const response = await axios.get(`/api/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const UpdateArtist = async (id, payload, token) => {
  return await apiRequest({
    method: 'PUT',
    endPoint: `/api/artists/${id}`,
    payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const DeleteArtist = async (id, token) => {
  return await apiRequest({
    method: 'DELETE',
    endPoint: `/api/artists/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
