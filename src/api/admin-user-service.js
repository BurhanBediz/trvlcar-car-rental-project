import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getUsers = () => {
  return axios.get(`${API_URL}/user/auth/all`, { headers: authHeader() });
};

const getUser = (id) => {
  return axios.get(`${API_URL}/user/${id}/auth`, { headers: authHeader() });
};

const downloadUsers = () => {
  return axios.get(`${API_URL}/excel/download/users`, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    responseType: 'blob'
  });
};

const adminRegister = (adminUser) => {
  return axios.post(`${API_URL}/add`, adminUser,{ headers: authHeader() });
}

const adminUpdateUser = (user,id) => {
  return axios.put(`${API_URL}/user/${id}/auth`, user, { headers:  authHeader() });
}

export { getUsers, downloadUsers, getUser, adminRegister, adminUpdateUser };
