import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../api/authentication';
import LoadingText from './LoadingText';
import { useAppContext } from '../context/AppContext';

const AdminGaurd = (Component) => {
  return function Gaurd() {
    const { customAlert, setLoadingAnime } = useAppContext();
    const [currentUser, setCurrentUser] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
      setLoadingAnime({ message: 'getting user...', show: true });
      getCurrentUser()
        .then((res) => {
          setCurrentUser(res);
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
      <Component currentUser={currentUser} />
    ) : (
      <LoadingText message="getting user..." />
    );
  };
};

export default AdminGaurd;
