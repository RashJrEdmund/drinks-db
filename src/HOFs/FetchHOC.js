import React from 'react';
import { MyContext } from '../context/MyContext';
import FetchData from '../data/FetchData';

const FetchHOC = (Component) => {
  return function Gaurd() {
    const { customAlert } = React.useContext(MyContext);
    const [fetchedData, setFetchedData] = React.useState(null);

    React.useEffect(() => {
      FetchData()
        .then((res) => {
          setFetchedData(res);
        })
        .catch(({ message }) => customAlert(message));
    }, []);

    return fetchedData?.Drinks?.length >= 0 ? (
      <Component fetchedData={fetchedData} />
    ) : (
      <p style={{ color: '#f5f5f5' }}>Loading...</p>
    );
  };
};

export default FetchHOC;
