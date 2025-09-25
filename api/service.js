import api from "./api";

export const getAllUsers = async () => {
  return api.get("/user");
};
export const getAllUsersDelete = async () => {
  return api.get("/user/delete");
};
export const getUserServ = async (userId) => {
  return api.get(`/user/${userId}`);
};
export const addUsers = async (dataToSend) => {
  return api.post("/user", dataToSend);
};
export const supprUser = async (userId) => {
  return api.delete(`/user/${userId}`);
};
export const updateUserServ = async (userId, dataToSend) => {
  return api.put(`/user/${userId}`, dataToSend);
};
export const softDelete = async (userId) => {
  return api.put(`/user/delete/${userId}`);
};
export const restoreUsers = async (userId) => {
  return api.put(`/user/restore/${userId}`);
};
export const getMontant = async () => {
  return api.get("/user/montant");
};

export const getAllBanques = async () => {
  return api.get("/banque");
};
export const getBanqueServ = async (banqueId) => {
  return api.get(`/banque/${banqueId}`);
};
export const addBanque = async (dataToSend) => {
  return api.post("/banque", dataToSend);
};
export const supprBanque = async (banqueId) => {
  return api.delete(`/banque/${banqueId}`);
};
export const updateBanqueServ = async (banqueId, dataToSend) => {
  return api.put(`/banque/${banqueId}`, dataToSend);
};
