/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../context/MyContext';
import StyledNavBar from '../styles/navbar.styles';

export default function Navbar() {
  const { userStatus } = React.useContext(MainContext);
  const [showSideMenu, setShowSideMenu] = React.useState(false);
  const navigate = useNavigate();

  const removeSideMenu = () => {
    if (showSideMenu) {
      setShowSideMenu(false);
    }
  };

  // document.body.addEventListener('click', () => {
  //   removeSideMenu();
  //   console.log('body clicked');
  // });

  const handleSearch = (drink) => {
    console.log('drink entered', drink);
  };

  return (
    <StyledNavBar>
      <div className="navBar-container">
        <button
          className="side_menu_btn"
          type="button"
          onClick={() => setShowSideMenu((prev) => !prev)}
        >
          {showSideMenu ? 'close Filter' : 'open Filter'}
        </button>

        <div className="user_details">
          <p className="user_status">
            myStatus: <span>{userStatus}</span>
          </p>

          <span
            className="profile_section"
            onClick={() => navigate('/profile')}
          >
            <div className="profile_logo" />
            <span>my Profile</span>
          </span>
        </div>

        <div className="menu-btns">
          <ul
            className={
              showSideMenu ? 'menu-list active-menu-list' : 'menu-list'
            }
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(e.target.elements.search_input.value);
                e.target.elements.search_input.value = '';
              }}
            >
              <input
                type="text"
                id="search_input"
                placeholder="Search Users"
                onChange={(e) => {
                  handleSearch(e.target.elements.search_input.value);
                }}
              />
              <button type="submit">Search</button>
            </form>
            <li onClick={removeSideMenu}>Users</li>
            <li onClick={removeSideMenu}>Drinks</li>
            <li onClick={removeSideMenu}>Categories</li>
            <li onClick={removeSideMenu}>glasses</li>
            <li onClick={removeSideMenu}>Ingredients</li>
          </ul>
        </div>
      </div>
    </StyledNavBar>
  );
}
