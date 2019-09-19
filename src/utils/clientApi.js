import axios from 'axios'
// import store from '../stores/index'

const API_URL = 'https://api.chucknorris.io'

export const clientApi = (url) => {
  // store.commit('setLoading', true)
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}/${url}`, {mode: 'no-cors'}, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff'
      }
    })
      .then((data) => {
        if (data.status === 200) {
          resolve(data.data)
        } else {
          reject(data)
        }
      })
      .catch(error => {
        reject(error)
      })
    // .finally(() => (store.commit('setLoading', false)))
  })
}
