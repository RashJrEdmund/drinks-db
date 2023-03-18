/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import MyContext from '../context/MyContext';

const StyledDropDown = styled.div`
  position: absolute;
  top: calc(100% + 1.8rem);
  background: linear-gradient(to bottom, #000000, #000000df, #000000cf);
  width: fit-content;
  height: fit-content;
  padding: 10px;
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
    color: #f5f5f5;
    color: #a52a2a;
    text-align: left;
    line-height: 30px;
    letter-spacing: 2px;
    font-weight: 500;
    width: 100%;
    margin: 10px 0;
  }
`;
// localStorage.clear();

export default function ProfileDropDown() {
  const { setdialogueDetails } = React.useContext(MyContext);
  const navigate = useNavigate();
  // localStorage.removeItem('currentUser');

  const handleLogOut = () => {
    setdialogueDetails((prev) => ({
      ...prev,
      show: true,
      job: 'Logout',
      message2: 'are you sure you want to log out',
      fxntoCall() {
        localStorage.removeItem('currentUser');
        navigate('/logout');
        setdialogueDetails((previous) => ({ ...previous, show: false }));
      },
    }));
  };

  const userDetails = JSON.parse(localStorage.getItem('currentUser'));

  if (!userDetails?.isAdmin) {
    return (
      <StyledDropDown className="profile_dropdown" id="profile_dropdown">
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={() => navigate('/profile')}>Profile</p>
        <p onClick={handleLogOut}>Logout</p>
      </StyledDropDown>
    );
  }

  return (
    <StyledDropDown className="profile_dropdown" id="profile_dropdown">
      <StyledDropDown className="profile_dropdown">
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={() => navigate('/profile')}>Profile</p>
        <p>Drinks</p>
        <p>Categories</p>
        <p>Ingredients</p>
        <p onClick={handleLogOut}>Logout</p>
      </StyledDropDown>
    </StyledDropDown>
  );
}
