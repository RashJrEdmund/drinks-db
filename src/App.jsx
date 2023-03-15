/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyContext from './context/MyContext';
import FetchData from './data/FetchData';
import AlertMessage from './components/AlertMessage';
import Main from './pages/Main';
import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './pages/UserProfile';

import Simulation from './data/DataSimulation.json';

export default function App() {
  const [fetchedData, setFetchedData] = React.useState({});
  const [userStatus, setUserStatus] = React.useState('Guest');
  const [filterData, setFilterData] = React.useState([]);

  const [alertMsg, setAlertMsg] = React.useState({
    message: '',
    show: false,
  });

  const bodyref = React.useRef();

  const toggleAlert = (msg) => {
    setAlertMsg((prev) => ({ message: msg, show: !prev.show }));

    setTimeout(() => {
      setAlertMsg((prev) => ({ message: '', show: !prev.show }));
    }, 2000);
  };

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
          toggleAlert,

          fetchedData,

          userStatus,
          setUserStatus,

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
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
