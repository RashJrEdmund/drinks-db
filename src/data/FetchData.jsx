// const API_KEY = 'my_api_key';

function FetchData() {
  const URL = `http://localhost:3000/users/`;
  return fetch(URL).then((res) => res.json());
}

export default FetchData;
