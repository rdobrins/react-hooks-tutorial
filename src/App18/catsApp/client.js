import axios from 'axios'
import { API_URL } from './env'

export const axiosClient = axios.create({ baseURL: API_URL })
