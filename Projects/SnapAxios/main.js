axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
function getTodos() {
  //1 Way
  //   axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/todos",
  //     params: {
  //       _limit: 10,
  //     },
  //   })
  //     .then((res) => showOutput(res))
  //     .catch((err) => console.log(err));

  //2nd way
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos", {
  //       params: {_limit: 10},
  //     })
  //     .then((res) => showOutput(res))
  //     .catch((err) => console.log(err));

  //3rd way
  axios("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
  //1 Way
  //   axios({
  //     method: "post",
  //     url: "https://jsonplaceholder.typicode.com/todos",
  //     data: {
  //       title: "New to do",
  //       completed: false,
  //     },
  //   })
  //     .then((res) => showOutput(res))
  //     .catch((err) => console.log(err));

  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New to do 2",
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  //   axios
  //     .put("https://jsonplaceholder.typicode.com/todos/1", {
  //       title: "updated to do ",
  //       completed: true,
  //     })
  //     .then((res) => showOutput(res))
  //     .catch((err) => console.log(err));

  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "updated to do ",
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      ),
      axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      ),
    ])
    .then(axios.spread((posts, todos) => showOutput(posts)))
    .catch((err) => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    header: {
      "Content-Type": "application/json",
      authorization: "jwt",
    },
  };
  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New to do 2",
        completed: false,
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "hello world",
      completed: false,
    },
    transformResponse: axios.defaults.transformResponse.concat(
      (data) => {
        data.title = data.title.toUpperCase();
        return data;
      }
    ),
  };
  axios(options)
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// ERROR HANDLING
function errorHandling() {
  axios("https://jsonplaceholder.typicode.com/todo")
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        //server responded
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        //Request made no response
        console.log(err.request);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();
  axios("https://jsonplaceholder.typicode.com/todos", {
    cancelToken: source.token,
  })
    .then((res) => showOutput(res))
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log("request cancelled", thrown.message);
      }
    });

  if (true) {
    source.cancel("request cancelled");
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getUTCDate()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document
  .getElementById("update")
  .addEventListener("click", updateTodo);
document
  .getElementById("delete")
  .addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document
  .getElementById("headers")
  .addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document
  .getElementById("error")
  .addEventListener("click", errorHandling);
document
  .getElementById("cancel")
  .addEventListener("click", cancelToken);
