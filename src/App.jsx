/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyContext from './context/MyContext';
import FetchData from './data/FetchData';
import Main from './pages/Main';
import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './pages/UserProfile';

import Simulation from './data/DataSimulation.json';

export default function App() {
  const [fetchedData, setFetchedData] = React.useState({});
  const [userStatus, setUserStatus] = React.useState('Guest');
  const [filterData, setFilterData] = React.useState(Simulation);
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
          fetchedData,
          userStatus,
          setUserStatus,
          Simulation,
          filterData,
          setFilterData,
          bodyref,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<Main />} />

            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
