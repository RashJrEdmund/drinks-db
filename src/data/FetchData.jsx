import axios from 'axios';

const apikey = 1;

const FetchData = async () => {
  const URL = `http://localhost:3000/users?apikey=${apikey}`;
  const allData = await axios.get(URL);
  return allData.data;
};

export default FetchData;
