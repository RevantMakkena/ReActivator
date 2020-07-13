import axios from "axios";
import {URL} from "../../config";
let response = {data: {}, status: 0};

export const LogUser = async (userName, password) => {
  await axios
    .post(`${URL}login`, {email: userName, password})
    .then((res) => {
      response.data = res.data;
      response.status = res.status;
    })
    .catch((err) => {
      response.status = err.response.status;
    });

  return response;
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
