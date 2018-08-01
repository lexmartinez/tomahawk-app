import { API_URL, API_KEY } from '../config/Constants'

export const fetchGames = (query: string, page: number) => (
  fetch(`${API_URL}/games/?fields=*&limit=5&order=name&${query ? `search=${query}` : ''}&offset=${(page * 5)}`,
    { headers: API_KEY })
    .then((res) => res)
    .catch((err) => err)
)
