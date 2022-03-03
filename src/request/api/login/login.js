import { getQuery, getRestful, post, put, remove } from '@/request/http.js'

export const login = (params) => {
  return post('/login', params)
}
