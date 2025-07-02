
import apiRequest from ".";
import axios from "axios";

// Get all movies (paginated)
export const GetAllMovies = async (token, page = 1, pageSize = 10) => {
  const response = await axios.get(`/api/movies?page=${page}&pageSize=${pageSize}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Get movie by ID
export const GetMovieById = async (id, token) => {
  const res = await fetch(`/api/movies/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Fetch failed");
  }

  return res.json();
};

// Add movie
export const AddMovie = async (payload, token) => {
  return await apiRequest({
    method: "POST",
    endPoint: "/api/movies/add-movie",
    payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Update movie
export const UpdateMovie = async (id, data, token) => {
  return await apiRequest({
    method: "PUT",
    endPoint: `/api/movies/${id}`,
    payload: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete movie
export const DeleteMovie = async (id, token) => {
  return await apiRequest({
    method: "DELETE",
    endPoint: `/api/movies/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Add a reply to a review
export const AddReviewReply = async (movieId, reviewId, text, token) => {
  return await apiRequest({
    method: "POST",
    endPoint: `/api/movies/${movieId}/reviews/${reviewId}/reply`,
    payload: { text },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
