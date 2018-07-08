import { API_URL, API_KEY, API_HEADER } from '../config/Constants'

export const fetchCategories = () => (
    fetch(`${API_URL}/genres/?fields=id,slug,name&limit=50&order=name`,
      {headers: {API_HEADER : API_KEY}})
      .then((res) => res.json())
      .catch((err) => err)
)
