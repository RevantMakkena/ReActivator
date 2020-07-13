import Axios from "axios";
import {EMP_URL} from "../../config";

export const GetAllEmployees = async (email, token) => {
  return await Axios.get(`${EMP_URL}`, {
    headers: {
      email: email,
      token: token,
    },
  })
    .then((res) => {
      if (res) return res.data;
      else return null;
    })
    .catch((err) => null);
};

export const GetEmployeeById = async (id, email, token) => {
  return await Axios.get(`${EMP_URL}${id}`, {
    headers: {
      email: email,
      token: token,
    },
  })
    .then((res) => res.data)
    .catch((err) => null);
};

export const DeleteEmployeeById = async (id, email, token) => {
  return await Axios.delete(`${EMP_URL}${id}`, {
    headers: {
      email: email,
      token: token,
    },
  })
    .then((res) => res.status)
    .catch((err) => null);
};
