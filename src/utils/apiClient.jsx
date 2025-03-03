import axios from "axios";

const API_BASE_URL = "https://zamani101.pythonanywhere.com/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token automatically
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Adjust based on your auth storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
