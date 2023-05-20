/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MyContext } from './context/MyContext';
import Main from './pages/Main';
import LogoutPage from './pages/logoutpage/LogoutPage';
import Login from './components/loginRegister/Login';
import Register from './components/loginRegister/Register';
import UserProfile from './pages/userprofile/UserProfile';

import AlertMessage from './components/AlertMessage';
import LoadingAnime from './components/LoadingAnime';

import Settings from './pages/Settings';
import CrudPage from './pages/crudpage/CrudPage';
import NestedDrinks from './nested routes/NestedDrinks';
import NestedCategories from './nested routes/NestedCategories';
import NestedIngredients from './nested routes/NestedIngredients';
import ItemModal from './components/ItemModal';
import useDialogue from './hooks/useDialogue';

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

  const { dialogueDetails } = useDialogue();

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

  const handleToggleModal = (id, items) =>
    setItemModal({
      items,
      show: true,
      start: +id,
    });

  const bodyref = React.useRef();

  React.useEffect(() => {
    toggleBodyOverFlow();
  }, [dialogueDetails.show, loadingAnime.show, itemModal.show, zoomPhoto]);

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          customAlert,

          handleToggleModal,

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
