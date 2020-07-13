import axios from "axios";
import {URL} from "../../config";

export const LogUser = async (userName, password) => {
  return await axios
    .post(`${URL}login`, {email: userName, password})
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else return null;
    })
    .catch((err) => {
      return null;
    });
};

export const RegisterUser = async (name, email, password) => {
  return await axios
    .post(`${URL}register`, {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.status === 200) return true;
      else return false;
    })
    .catch((err) => false);
};
