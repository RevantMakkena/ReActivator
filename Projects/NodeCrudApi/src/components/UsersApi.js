import axios from "axios";
const url = "http://localhost:3033/api/users";

export const getAll = () => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
