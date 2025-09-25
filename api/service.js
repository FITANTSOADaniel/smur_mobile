import api from "./api";

// Auth
export const login = async (dataToSend) => {
  return api.post("/login", dataToSend);
};
export const register = async (dataToSend) => {
  return api.post("/register", dataToSend);
};

// Users
export const getAllUsers = async () => {
  return api.get("/users");
};
export const addUsers = async (dataToSend) => {
  return api.post("/users", dataToSend);
};
export const supprUser = async (userId) => {
  return api.delete(`/users/${userId}`);
};