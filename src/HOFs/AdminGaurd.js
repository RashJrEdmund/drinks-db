/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../api/authentication';
import { MyContext } from '../context/MyContext';

const AdminGaurd = (Component) => {
  return function Gaurd(props) {
    const { customAlert, setLoadingAnime } = React.useContext(MyContext);
    const { currentUser, setCurrentUser } = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
      setLoadingAnime({ message: 'getting user...', show: true });
      getCurrentUser()
        .then((res) => {
          setCurrentUser(res);
          console.log('this current-user in adminGaurd', res);
          if (!res.is_admin) {
            navigate('/', { replace: true });
          }
        })
        .catch(() => {
          customAlert('access denied');
          navigate('/', { replace: true });
        })
        .finally(() => setLoadingAnime({ message: '', show: false }));
    }, []);

    return currentUser?.is_admin ? (
      <Component {...props} />
    ) : (
      <h1 style={{ margin: '2rem auto', fontSize: '17px' }}>
        Access denied...
      </h1>
    );
  };
};

export default AdminGaurd;
