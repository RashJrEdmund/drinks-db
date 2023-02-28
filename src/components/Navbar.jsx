/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import StyledNavBar from '../styles/navbar.styles';

export default function Navbar() {
  const [showSideMenu, setShowSideMenu] = React.useState(false);

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
        <a href="#hero">
          <h1>Home</h1>
        </a>

        <div className="menu-btns">
          <button
            className="category-btn"
            type="button"
            onClick={() => setShowSideMenu((prev) => !prev)}
          >
            Categories
          </button>

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
              <input type="text" id="search_input" placeholder="Search drink" />
              <button type="submit">Search</button>
            </form>
            <li onClick={removeSideMenu}>Water</li>
            <li onClick={removeSideMenu}>Milk</li>
            <li onClick={removeSideMenu}>Bear</li>
            <li onClick={removeSideMenu}>Cider</li>
            <li onClick={removeSideMenu}>Wine</li>
            <li onClick={removeSideMenu}>Spirits</li>
          </ul>
        </div>
      </div>
    </StyledNavBar>
  );
}
