/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaUser } from 'react-icons/fa';
import {
  MdLogin,
  MdDashboardCustomize,
  MdHome,
  MdApi,
  MdLogout,
} from 'react-icons/md';
import { MyContext } from '../context/MyContext';

const StyledDropDown = styled.div`
  position: absolute;
  left: -170%;
  top: calc(100% + 1.8rem);
  background: linear-gradient(to bottom, #000000, #000000df, #000000cf);
  width: fit-content;
  min-width: 175px;
  height: fit-content;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 10px;
  z-index: 6;

  &::before {
    content: ' ';
    background-color: #000;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) rotate(45deg);
    height: 30px;
    width: 30px;
    margin: 0 1rem 0 0;
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    z-index: -1;
  }

  p {
    color: #a52a2a;
    text-align: left;
    line-height: 40px;
    letter-spacing: 2px;
    font-weight: 500;
    width: fit-content;
    margin: 1rem 0 0;
    word-break: keep-all;
  }

  @media only screen and (max-width: 800px) {
    left: -190%;
  }
`;
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
  const { setdialogueDetails, customAlert } = React.useContext(MyContext);
  const navigate = useNavigate();
  // localStorage.removeItem('currentUser');

  const handleLogOut = () => {
    setdialogueDetails((prev) => ({
      ...prev,
      show: true,
      job: 'Logout',
      message2: 'are you sure you want to log out',
      fxntoCall() {
        localStorage.clear();
        navigate('/logout', { replace: true });
        window.location.reload();
        customAlert('logged out');
        setdialogueDetails((previous) => ({ ...previous, show: false }));
      },
    }));
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
      <p onClick={() => window.scrollTo(0, 0)}>
        <MdHome /> Home
      </p>
      <p onClick={() => navigate('/cruding/drinks')}>
        <MdDashboardCustomize /> Dashboard
      </p>
      <p onClick={() => navigate('/profile')}>
        <FaUser /> Profile
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
      <p onClick={() => window.scrollTo(0, 0)}>
        <MdHome /> Home
      </p>
      <ProfileAndLoginBtn fxn={checkUserLoggedIn} currentUser={currentUser} />

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
