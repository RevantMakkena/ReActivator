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
