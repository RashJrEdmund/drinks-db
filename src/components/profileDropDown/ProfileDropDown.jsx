/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import {
  MdLogin,
  MdDashboardCustomize,
  MdHome,
  MdFavorite,
  MdApi,
  MdLogout,
} from 'react-icons/md';

import StyledDropDown from './StyledDropDown';
import { MyContext } from '../../context/MyContext';
import useDialogue from '../../hooks/useDialogue';

// localStorage.clear();

function ProfileAndLoginBtn({ fxn, currentUser }) {
  return currentUser ? (
    <p onClick={fxn}>
      <FaUser /> Profile
    </p>
  ) : (
    <p onClick={fxn}>
      <MdLogin /> Login
    </p>
  );
}

export default function ProfileDropDown({ currentUser }) {
  const { customAlert } = React.useContext(MyContext);
  const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();
  const navigate = useNavigate();

  const handleLogOut = () => {
    const options = {
      agreeTxt: 'Logout',
      message3: 'you are about to be logged out',
      fxntoCall() {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/logout', { replace: true });
        window.location.reload();
        customAlert('logged out');
      },
    };

    displayDialogue(options);
  };

  const checkUserLoggedIn = () => {
    if (currentUser) {
      navigate('/profile');
      return;
    }

    navigate('/login');
  };

  return currentUser?.is_admin ? (
    <StyledDropDown className="profile_dropdown" id="profile_dropdown">
      {dialogueDetails.show && <DialogueComponent />}

      <p onClick={() => window.scrollTo(0, 0)}>
        <MdHome /> Home
      </p>
      <p onClick={() => navigate('/cruding/drinks')}>
        <MdDashboardCustomize /> Dashboard
      </p>
      <p onClick={() => navigate('/profile')}>
        <FaUser /> Profile
      </p>

      <p onClick={() => customAlert('this feature is not yet available')}>
        <MdFavorite /> Favorites
      </p>

      <p onClick={() => navigate('/apipage')}>
        <MdApi /> API
      </p>

      <p onClick={handleLogOut}>
        <MdLogout /> Logout
      </p>
    </StyledDropDown>
  ) : (
    <StyledDropDown className="profile_dropdown" id="profile_dropdown">
      {dialogueDetails.show && <DialogueComponent />}

      <p onClick={() => window.scrollTo(0, 0)}>
        <MdHome /> Home
      </p>
      <ProfileAndLoginBtn fxn={checkUserLoggedIn} currentUser={currentUser} />

      {currentUser && (
        <p onClick={() => customAlert('this feature is not yet available')}>
          <MdFavorite /> Favorites
        </p>
      )}

      {currentUser && (
        <p onClick={() => navigate('/apipage')}>
          <MdApi /> API
        </p>
      )}

      {currentUser && (
        <p onClick={handleLogOut}>
          <MdLogout /> Logout
        </p>
      )}
    </StyledDropDown>
  );
}
