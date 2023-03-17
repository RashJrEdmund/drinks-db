/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileDropDown() {
  const navigate = useNavigate();

  const dropDownOptions = {
    admin: [
      { name: 'Home' },
      { name: 'Profile', route: '/profile' },
      { name: 'Drinks', route: '/' },
      { name: 'Glasses', route: '/' },
      { name: 'Ingredients', route: '/' },
      { name: 'Logout', route: '/logout' },
    ],

    normalUser: [
      { name: 'Home' },
      { name: 'Profile', route: '/profile' },
      { name: 'Logout', route: '/logout' },
    ],
  };

  const userDetails = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className="profile_dropdown">
      {userDetails?.isAdmin
        ? dropDownOptions.admin.map((option) => (
            <p
              key={option.name}
              onClick={() => navigate(`${option.route ? option.route : ''}`)}
            >
              {option.name}
            </p>
          ))
        : dropDownOptions.normalUser.map((option) => (
            <p
              key={option.name}
              onClick={() => navigate(`${option.route ? option.route : ''}`)}
            >
              {option.name}
            </p>
          ))}
    </div>
  );
}
