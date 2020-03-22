import Axios from 'axios'
export default Axios.create({
  baseURL: 'http://5e6aa0f20f70dd001643bf33.mockapi.io/',
  headers: {'Content-Type': 'application/json'}
})