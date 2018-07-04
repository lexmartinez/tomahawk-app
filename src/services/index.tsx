export const getGamesInfo = () => (
  fetch('https://api.github.com/users/lexmartinez/repos')
    .then((res) => res.json())
    .catch((err) => err)
)
