import axios from "axios";
const url = "http://localhost:3033/api/users";

export const getAll = () => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getUser = async (id) => {
  return await axios
    .get(`${url}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deleteUserApi = async (id) => {
  return await axios
    .delete(`${url}/${id}`)
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const editUserApi = async (id) => {
  return await axios
    .put(`${url}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
