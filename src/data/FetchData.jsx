const API_KEY = 1;

function FetchData() {
  const URL = `http://localhost:3000/users?apikey=${API_KEY}`;
  return fetch(URL).then((res) => res.json());
}

export default FetchData;
