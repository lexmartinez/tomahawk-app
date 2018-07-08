import { API_URL, API_KEY } from '../config/Constants'

export const fetchNews = () => (
    fetch(`${API_URL}/pulses/?fields=id,title,author,image,summary,published_at&limit=20&order=published_at:desc`,
      {headers: API_KEY})
      .then((res) => res)
      .catch((err) => err)
)
