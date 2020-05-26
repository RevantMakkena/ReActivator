import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

export function getCourses() {
  return axios.get(baseUrl).then((res) => res.data);
}
