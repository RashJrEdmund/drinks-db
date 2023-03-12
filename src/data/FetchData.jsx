const apikey = process.env.API_KEY;

function FetchData() {
  const URL = `http://localhost:3000/users?apikey=${apikey}`;
  return fetch(URL).then((res) => res.json());
}

export default FetchData;
