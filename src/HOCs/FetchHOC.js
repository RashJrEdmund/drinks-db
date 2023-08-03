/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { getAllData } from '../api/authentication';
import { MyContext } from '../context/MyContext';
import LoadingText from './LoadingText';

const FetchHOC = (Component) => {
  return function Gaurd(props) {
    const { customAlert } = React.useContext(MyContext);
    const [fetchedData, setFetchedData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      getAllData()
        .then(({ data }) => {
          setFetchedData(data);
        })
        .catch(({ message }) => customAlert(message))
        .finally(() => setLoading(false));
    }, []);

    return loading ? (
      <LoadingText />
    ) : (
      <Component {...props} fetchedData={fetchedData} />
    );
  };
};

export default FetchHOC;
