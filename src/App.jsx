/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyContext from './context/MyContext';
import FetchData from './data/FetchData';
import Main from './pages/Main';
import LogoutPage from './pages/LogoutPage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './pages/UserProfile';

import AlertMessage from './components/AlertMessage';
import DialogueMsg from './components/DialogueMsg';
import LoadingAnime from './components/LoadingAnime';

import Simulation from './data/DataSimulation.json';
import ApiPage from './pages/ApiPage';

export default function App() {
  const [fetchedData, setFetchedData] = React.useState({});
  const [userDetails, setUserDetails] = React.useState({
    name: JSON.parse(localStorage.getItem('currentUser'))?.last_name,
    status: 'Guest',
    isAdmin: JSON.parse(localStorage.getItem('currentUser'))?.is_admin,
  });
  const [filterData, setFilterData] = React.useState([]);

  const [loadingAime, setLoadingAime] = React.useState({
    show: false,
    message: '',
  });

  const [alertMsg, setAlertMsg] = React.useState({
    message: '',
    show: false,
  });

  const [dialogueDetails, setdialogueDetails] = React.useState({
    message1: '',
    message2: '',
    job: '',
    fxntoCall: null,
    show: false,
  });

  // setdialogueDetails((prev) => ({ // edit and call this function along where you want it to work
  //   ...prev,
  //   show: true,
  //   job: 'Logout',
  //   message2: 'are you sure you want to log out',
  //   fxntoCall() {
  //     localStorage.removeItem('currentUser');
  //     navigate('/logout');
  //     setdialogueDetails((previous) => ({ ...previous, show: false }));
  //   },
  // }));

  const customAlert = (msg) => {
    setAlertMsg(() => ({ message: msg, show: true }));

    setTimeout(() => {
      setAlertMsg(() => ({ message: '', show: false }));
    }, 2000);
  };

  const toggleBodyOverFlow = () => {
    if (dialogueDetails.show || loadingAime.show) {
      document.body.style = 'overflow: hidden';
    } else {
      document.body.style = 'overflow: unset';
    }
  };

  const bodyref = React.useRef();

  React.useEffect(() => {
    FetchData()
      .then((res) => setFetchedData(res))
      .catch((err) => console.log('Erro!', err));
  }, []);

  React.useEffect(() => {
    toggleBodyOverFlow();
  }, [dialogueDetails.show, loadingAime.show]);

  // console.log('this fetchedData', fetchedData);

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          customAlert,

          setdialogueDetails,

          loadingAime,
          setLoadingAime,

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

        {dialogueDetails.show && (
          <DialogueMsg
            message={dialogueDetails}
            setmessage={setdialogueDetails}
          />
        )}

        {loadingAime.show && <LoadingAnime message={loadingAime.message} />}

        <BrowserRouter>
          <Routes>
            <Route index element={<Main name="peter" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogoutPage />} />

            <Route path="/profile" element={<UserProfile />} />
            <Route path="/apipage" element={<ApiPage />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
