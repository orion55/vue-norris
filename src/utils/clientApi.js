import axios from 'axios'

const API_URL = 'https://api.chucknorris.io'

export const clientApi = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}/${url}`)
      .then((data) => {
        data.status === 200 ? resolve(data.data) : reject(data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
