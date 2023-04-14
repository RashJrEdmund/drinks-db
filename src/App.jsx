/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MyContext } from './context/MyContext';
import Main from './pages/Main';
import LogoutPage from './pages/LogoutPage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './pages/UserProfile';

import AlertMessage from './components/AlertMessage';
import DialogueMsg from './components/DialogueMsg';
import LoadingAnime from './components/LoadingAnime';

import Settings from './pages/Settings';
import CrudPage from './pages/CrudPage';
import NestedDrinks from './nested routes/NestedDrinks';
import NestedCategories from './nested routes/NestedCategories';
import NestedIngredients from './nested routes/NestedIngredients';
import ItemModal from './components/ItemModal';

export default function App() {
  const [filterData, setFilterData] = React.useState([]);

  const [zoomPhoto, setZoomPhoto] = React.useState(false);
  const [itemModal, setItemModal] = React.useState({
    items: {},
    show: false,
    start: 0,
  });

  const [showMenu, setShowMenu] = React.useState({
    side: false,
    dropDown: false,
  });

  const [loadingAnime, setLoadingAnime] = React.useState({
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
  //     setdialogueDetails((currentUserprevious) => ({ ...previous, show: false }));
  //   },
  // }));

  const customAlert = (msg) => {
    setAlertMsg(() => ({ message: msg, show: true }));

    setTimeout(() => {
      setAlertMsg(() => ({ message: '', show: false }));
    }, 2000);
  };

  const toggleBodyOverFlow = () => {
    document.body.style.overflow =
      document.body.style.overflow === 'hidden' ? 'unset' : 'hidden';
  };

  const bodyref = React.useRef();

  React.useEffect(() => {
    toggleBodyOverFlow();
  }, [dialogueDetails.show, loadingAnime.show, itemModal.show, zoomPhoto]);

  // console.log('this fetchedData', fetchedData);

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          customAlert,

          setdialogueDetails,

          showMenu,
          setShowMenu,

          loadingAnime,
          setLoadingAnime,

          filterData,
          setFilterData,

          zoomPhoto,
          setZoomPhoto,

          itemModal,
          setItemModal,

          bodyref,
        }}
      >
        {alertMsg.show && <AlertMessage message={alertMsg.message} />}

        {dialogueDetails.show && (
          <DialogueMsg
            details={dialogueDetails}
            setDetails={setdialogueDetails}
          />
        )}

        {loadingAnime.show && <LoadingAnime message={loadingAnime.message} />}

        {itemModal.show && (
          <ItemModal itemModal={itemModal} setItemModal={setItemModal} />
        )}

        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogoutPage />} />

            <Route path="/cruding" element={<CrudPage />}>
              <Route path="drinks" element={<NestedDrinks />} />
              <Route path="categories" element={<NestedCategories />} />
              <Route path="ingredients" element={<NestedIngredients />} />
            </Route>

            <Route path="/profile" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
