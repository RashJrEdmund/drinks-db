import axios from 'axios';
import { API_KEY, API_BASE_URL } from '../constants';

const FetchData = async () => {
  const URL = `${API_BASE_URL}all?apikey=${API_KEY}`;
  const allData = await axios.get(URL);
  return allData.data;
};

export default FetchData;
