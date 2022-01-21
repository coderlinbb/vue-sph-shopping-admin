import axios from 'axios'

const mock = axios.create({
  baseURL: process.env.VUE_APP_MOCK_API,
  timeout: 5000
})

mock.interceptors.request.use((config) => {
  return config
}, (error) => {
  console.log(error);
})

mock.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  console.log(error)
})




export default mock
