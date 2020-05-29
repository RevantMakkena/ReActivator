import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL + "/users/";

export function getUsers() {
  return axios.get(baseUrl).then((res) => res.data);
}

export function deleteUser(id) {
  return axios.delete(baseUrl + id);
}

export function editUser(id) {
  return axios
    .get(baseUrl)
    .then((res) => res.data.find((x) => x.id == id));
}
