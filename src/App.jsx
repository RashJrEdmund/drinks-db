/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyContext from './context/MyContext';
import FetchData from './data/FetchData';
import AlertMessage from './components/AlertMessage';
import Main from './pages/Main';
import LogoutPage from './pages/LogoutPage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './pages/UserProfile';

import Simulation from './data/DataSimulation.json';

export default function App() {
  const [fetchedData, setFetchedData] = React.useState({});
  const [userDetails, setUserDetails] = React.useState({
    name: JSON.parse(localStorage.getItem('currentUser'))?.last_name,
    status: 'Guest',
    isAdmin: JSON.parse(localStorage.getItem('currentUser'))?.is_admin,
  });
  const [filterData, setFilterData] = React.useState([]);

  const [alertMsg, setAlertMsg] = React.useState({
    message: '',
    show: false,
  });

  const customAlert = (msg) => {
    setAlertMsg((prev) => ({ message: msg, show: !prev.show }));

    setTimeout(() => {
      setAlertMsg((prev) => ({ ...prev, show: !prev.show }));
    }, 2000);
  };

  const bodyref = React.useRef();

  React.useEffect(() => {
    FetchData()
      .then((res) => setFetchedData(res))
      .catch((err) => console.log('Erro!', err));
  }, []);

  console.log('this fetchedData', fetchedData);

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          alertMsg,
          customAlert,

          fetchedData,

          userDetails,
          setUserDetails,

          Simulation,

          filterData,
          setFilterData,

          bodyref,
        }}
      >
        {alertMsg.show && <AlertMessage message={alertMsg.message} />}

        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogoutPage />} />

            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
