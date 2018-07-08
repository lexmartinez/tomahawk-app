import { API_URL, API_KEY } from '../config/Constants'

export const fetchCategories = () => (
    fetch(`${API_URL}/genres/?fields=id,slug,name&limit=50&order=name`,
      {headers: {'user-key': API_KEY}})
      .then((res) => res.json())
      .catch((err) => err)
)
