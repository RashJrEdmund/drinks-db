import React from 'react';
import styled from '@emotion/styled';
import { MyContext } from '../context/MyContext';
import FetchData from '../data/FetchData';

const StyledLoadingMessage = styled.p`
  @keyframes LoadingAnime {
    from {
      color: #4682b4;
    }
    to {
      color: #a52a2a;
    }
  }

  height: 70vh;
  width: 100%;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: LoadingAnime;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

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
      <StyledLoadingMessage>Loading...</StyledLoadingMessage>
    );
  };
};

export default FetchHOC;
