import Axios from 'axios'
export default Axios.create({
  baseURL: ' http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/',
  headers: {'Content-Type': 'application/json'}
})