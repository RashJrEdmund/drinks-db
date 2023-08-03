/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import LogoutPage from './pages/logoutpage/LogoutPage';
import Login from './components/loginRegister/Login';
import Register from './components/loginRegister/Register';
import UserProfile from './pages/userprofile/UserProfile';

import Settings from './pages/Settings';
import CrudPage from './pages/crudpage/CrudPage';
import NestedDrinks from './nested routes/NestedDrinks';
import NestedCategories from './nested routes/NestedCategories';
import NestedIngredients from './nested routes/NestedIngredients';
import { useAppContext } from './context/AppContext';

export default function App() {
  // const [filterData, setFilterData] = React.useState([]);

  // const [zoomPhoto, setZoomPhoto] = React.useState(false);

  // const [showMenu, setShowMenu] = React.useState({
  //   side: false,
  //   dropDown: false,
  // });

  // const { dialogueDetails } = useDialogue();

  // const { itemModal } = useModal();

  // const { LoadingComponent, setLoadingAnime, loadingAnime } = useLoader();

  // const { AlertComponet, customAlert, alertMsg } = useAlert(); // will use it only at the top level

  // const toggleBodyOverFlow = () => {
  //   document.body.style.overflow =
  //     document.body.style.overflow === 'hidden' ? 'unset' : 'hidden';
  // };

  // const bodyref = React.useRef();

  // React.useEffect(() => {
  //   toggleBodyOverFlow();
  // }, [dialogueDetails.show, loadingAnime.show, itemModal.show, zoomPhoto]);

  const {
    AlertComponet,
    alertMsg,

    LoadingComponent,
    loadingAnime,
  } = useAppContext();

  return (
    <div className="App">
      {alertMsg.show && <AlertComponet />}
      {loadingAnime.show && <LoadingComponent />}

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
    </div>
  );
}
