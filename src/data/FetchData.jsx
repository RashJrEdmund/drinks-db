import axios from 'axios';
import { API_KEY, API_BASE_URL } from '../constants';

const FetchData = async () => {
  const URL = `${API_BASE_URL}all?apikey=${API_KEY}`;
  const allData = await axios
    .get(URL)
    .then(({ data }) => data)
    .catch(() => ({ status: 401, message: 'an erro occured while fetching' }));

  return allData;
};

export default FetchData;
