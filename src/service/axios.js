import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
  timeout: 3000000,
  headers: {
    "Content-Type": "application/json",
    Authorization: undefined,
  },
});

instance.interceptors.request.use;

async function GET(url, params) {
  let result = await instance
    .get(url, {
      params: {
        ...params,
      },
    })
    .then((res) => res)
    .catch((err) => err.response);
  return result;
}

async function POST(url, body, params) {
  let result = instance.post(url, { ...body }, {
    params: {...params}
  }).then(res => res)
    .catch(err => err.response)
  return result
}

async function PUT(url, body) {
  let result = instance.put(url, { ...body }).then(res => res)
    .catch(err => err.response)
  return result
}

async function DELETE(url, params) {
  let result = await instance
    .delete(url, { params: { ...params } })
    .then((response) => {
      return response;
    });
  return result;
}

instance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export {GET, PUT, POST, DELETE}