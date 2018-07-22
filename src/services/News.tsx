import { API_URL, API_KEY } from '../config/Constants'

export const fetchNews = (page: number) => (
    fetch(`${API_URL}/pulses/?fields=*&limit=5&offset=${(page * 5)}&order=published_at:desc`,
      {headers: API_KEY})
      .then((res) => res)
      .catch((err) => err)
)
