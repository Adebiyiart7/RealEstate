export const API_URI = "http://192.168.159.67:5000/api";
export const axiosConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
