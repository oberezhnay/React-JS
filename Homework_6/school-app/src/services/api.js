import Axios from 'axios'
export default Axios.create({
  baseURL: 'http://5e415a2e2001b900146ba540.mockapi.io/todos/',
  headers: {'Content-Type': 'application/json'}
})