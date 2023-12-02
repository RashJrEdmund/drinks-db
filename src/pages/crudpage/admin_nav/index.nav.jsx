/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import StyledAdminNav from './index.style';

export default function AdminNavBar({ adminNavRef, setActiveMenu }) {
  const navigate = useNavigate();

  const handleAdminNav = (e) => {
    const {
      target: { name },
    } = e;

    if (name === 'Home') navigate('/');
    else if (name === 'Profile') navigate('/profile');
    else navigate('/settings');
  };

  return (
    <StyledAdminNav ref={adminNavRef}>
      <div className="admin_nav">
        {['Home', 'Profile', 'Settings'].map((btn) => (
          <button key={btn} type="button" name={btn} onClick={handleAdminNav}>
            {btn}
          </button>
        ))}

        <form className="search_form">
          <button type="submit">search</button>
          <input type="text" placeholder="search item" />
        </form>

        <button
          type="button"
          className="menu_btn"
          onClick={() => setActiveMenu((prev) => ({ ...prev, side: true }))}
        >
          <AiOutlineMenu />
        </button>
      </div>
    </StyledAdminNav>
  );
}
