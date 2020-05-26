import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL + "/users/";

export function getUsers() {
  return axios.get(baseUrl).then((res) => res.data);
}

export function deleteUser(id) {
  return axios.delete(baseUrl + id);
  // .then((res) => {
  //   if (res.status === 200) return true;
  //   else false;
  // });
}
