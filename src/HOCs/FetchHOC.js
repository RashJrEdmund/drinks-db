/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { getAllData } from '../api/authentication';
import { MyContext } from '../context/MyContext';
import LoadingText from './LoadingText';

const FetchHOC = (Component) => {
  return function Gaurd(props) {
    const { customAlert } = React.useContext(MyContext);
    const [fetchedData, setFetchedData] = React.useState(null);

    React.useEffect(() => {
      getAllData()
        .then(({ data }) => {
          setFetchedData(data);
        })
        .catch(({ message }) => customAlert(message));
    }, []);

    return fetchedData?.Drinks?.length >= 0 ? (
      <Component {...props} fetchedData={fetchedData} />
    ) : (
      <LoadingText />
    );
  };
};

export default FetchHOC;
