import axios from 'axios'

export default axios.create({
    baseURL: 'http://5e415a2e2001b900146ba540.mockapi.io/todos/todos',
    headers: { 'Content-Type': 'application/json' }
  });