import apiRequest from '.';

// export const registerUser = async (payload) => {
//   return await apiRequest({
//     method: 'POST',
//     endPoint: '/api/users/register',
//     payload,
//   });
// };

// export const loginUser = async (payload) => {
//   return await apiRequest({
//     method: 'POST',
//     endPoint: '/api/users/login',
//     payload,
//   });
// };
// ❌ REMOVE register & login for Clerk-only auth

export const GetCurrentUser = async (token) => {
  return await apiRequest({
    method: "GET",
    endPoint: "/api/users/get-current-user",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProfile = async (token) => {
  return await apiRequest({
    method: "GET",
    endPoint: "/api/users/profile",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
