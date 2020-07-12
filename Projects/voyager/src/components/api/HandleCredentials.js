import axios from "axios";
import {URL} from "../../config";

export const LogUser = async (userName, password) => {
  return await axios
    .post(`${URL}login`, {email: userName, password})
    .then((res) => {
      if (res.status === 200) {
        debugger;
        return res.data;
      } else return null;
    });
};
