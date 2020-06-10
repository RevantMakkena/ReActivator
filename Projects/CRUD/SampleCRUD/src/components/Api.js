import axios from "axios";
const Url = "https://jsonplaceholder.typicode.com/posts";

export function getApiPosts() {
  return axios
    .get(Url)
    .then((res) => res)
    .catch((err) => console.log(err));
}

export function deleteApiPost(id) {
  return axios
    .delete(`${Url}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
