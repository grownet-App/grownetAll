import axios from 'axios'
import Constants from 'expo-constants'

const BASE_URL = Constants.expoConfig.extra.BaseUrl

axios.defaults.baseURL = BASE_URL

export default axios
