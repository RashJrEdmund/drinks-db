const API_KEY = 'my_api_key';

function FetchData() {
  const URL = `http://something_something?apikey=?${API_KEY}`;
  return fetch(URL).then((res) => res.json());
}

export default FetchData;
