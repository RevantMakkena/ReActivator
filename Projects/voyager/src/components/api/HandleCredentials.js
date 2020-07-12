import axios from "axios";
import {URL} from "../../config";

export const LogUser = async (userName, password) => {
  return await axios
    .post(`${URL}login`, {email: userName, password})
    .then((res) => {
      debugger;
      if (res.status === 200) {
        return res.data;
      } else return null;
    })
    .catch((err) => {
      return null;
    });
};
