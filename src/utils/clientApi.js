import axios from 'axios'
import store from '../stores/index'

const API_URL = 'https://api.chucknorris.io'

export const clientApi = (url) => {
  store.commit('setLoading', true)
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}/${url}`)
      .then((data) => {
        resolve(data)
      })
      .catch(error => {
        reject(error)
      })
      .finally(() => (store.commit('setLoading', false)))
  })
}
