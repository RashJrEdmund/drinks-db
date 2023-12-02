/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../api/authentication';
import { useAppContext } from '../context/AppContext';

// const logIn = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve({firstName: "Gaston", lastName: "Che"}), 2000);
//   });
// }

const AuthGaurd = (Component) => {
  return function Gaurd(props) {
    const { customAlert, setLoadingAnime } = useAppContext();
    const [loadedUser, setLoadedUser] = useState();

    useEffect(() => {
      setLoadingAnime({ message: 'getting ready...', show: true });
      getCurrentUser()
        .then(setLoadedUser)
        .catch(() => customAlert('you are not logged in'))
        .finally(() => setLoadingAnime({ message: '', show: false }));
    }, []);

    return <Component {...props} currentUser={loadedUser} />;
  };
};

export default AuthGaurd;
