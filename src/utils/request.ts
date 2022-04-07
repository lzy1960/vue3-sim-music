import axios from 'axios'
import { ElMessage } from 'element-plus'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { ResultDTO } from '../types/index';

const instance = axios.create({
  baseURL: 'https://netease-cloud-music-api-dun-nu.vercel.app',
  timeout: 20000,
})

instance.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token')
  // console.log(token)
  // if (token) {
  //   console.log('请求头不为空')
  //   console.log(config)
  //   config.headers!.token = token
  // }
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use((response: AxiosResponse<ResultDTO>) => {
  const data = response.data

  if (data.code === 200) { }
  return response
}, error => {
  return Promise.reject(error)
})

const request = async (config: AxiosRequestConfig): Promise<ResultDTO> => {
  const { data } = await instance.request<ResultDTO>(config)
  console.log(data)
  return data
}

export default request
