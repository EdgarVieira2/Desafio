import axios from 'axios';

export default async function getGamesApi() {
  const response = await axios.get('https://api.rawg.io/api/games?key=2afb95be3003418280dd85322bef4430')
  const getResponse = response.data.results;
  return getResponse;
}

