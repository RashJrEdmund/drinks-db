import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../api/authentication';
import { MyContext } from '../context/MyContext';

const AdminGaurd = (Component) => {
  return function Gaurd() {
    const { customAlert, setLoadingAnime } = React.useContext(MyContext);
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
      <p style={{ color: '#f5f5f5' }}>Access denied...</p>
    );
  };
};

export default AdminGaurd;
