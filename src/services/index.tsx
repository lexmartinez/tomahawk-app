
export const fetchGames = () => (
  fetch('https://api.github.com/users/lexmartinez/repos')
    .then((res) => res.json())
    .catch((err) => err)
)
