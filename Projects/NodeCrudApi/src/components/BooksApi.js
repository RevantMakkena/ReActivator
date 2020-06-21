import axios from "axios";
const url = "http://localhost:3003/api/books";

export const getAll = () => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
