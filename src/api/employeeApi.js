const baseUrl = process.env.REACT_APP_API_URL + "/employees/";
import axios from "axios";

export function getEmployees() {
  return axios.get(baseUrl).then((res) => res.data);
}
