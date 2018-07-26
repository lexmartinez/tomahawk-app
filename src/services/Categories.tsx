import { API_URL, API_KEY } from '../config/Constants'

export const fetchCategories = () => (
    fetch(`${API_URL}/genres/?fields=id,slug,name&limit=50&order=name`,
      { headers: API_KEY })
      .then((res) => res)
      .catch((err) => err)
)

export const fetchGames = (category: number, page: number) => (
  fetch(`${API_URL}/games/?fields=*&limit=5&order=popularity:desc
    &filter[genres][eq]=${category}&offset=${(page * 5)}`,
    { headers: API_KEY })
    .then((res) => res)
    .catch((err) => err)
)
