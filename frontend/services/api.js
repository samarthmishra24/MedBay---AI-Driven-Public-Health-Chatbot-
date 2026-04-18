// frontend/services/api.js
import axios from "axios";

// ✅ FIXED BASE URL
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:9300",
  headers: {
    "Content-Type": "application/json",
  },
});

// --- CHATBOT API ---
export const sendMessageToBot = async (messagePayload) => {
  try {
    const response = await apiClient.post("/webhook/web", messagePayload);
    return response.data;
  } catch (error) {
    console.error("Error sending message to bot:", error);
    throw error;
  }
};

// --- REVERSE GEOCODE ---
export const getAddressFromCoords = async (latitude, longitude) => {
  try {
    const response = await apiClient.post("/api/reverse-geocode", {
      latitude,
      longitude,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching address:", error);
    throw error;
  }
};

// --- X-RAY UPLOAD ---
export const uploadXrayImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiClient.post("/api/xray-upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading X-ray image:", error);
    throw error;
  }
};

// --- DOCUMENT UPLOAD ---
export const uploadDocument = async (formData) => {
  try {
    const response = await apiClient.post("/api/document/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading document:", error);
    throw error.response?.data || error;
  }
};

// --- DOCUMENT QUERY ---
export const queryDocument = async (formData) => {
  try {
    const response = await apiClient.post("/api/document/query/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error querying document:", error);
    throw error.response?.data || error;
  }
};