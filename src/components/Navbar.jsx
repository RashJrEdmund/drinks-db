import React from 'react';
import StyledNavBar from '../styles/navbar.styles';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);

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
            onClick={() => setShowNavbar((prev) => !prev)}
          >
            Categories
          </button>

          <ul
            className={showNavbar ? 'menu-list active-menu-list' : 'menu-list'}
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
            <li>Water</li>
            <li>Milk</li>
            <li>Bear</li>
            <li>Cider</li>
            <li>Wine</li>
            <li>Spirits</li>
          </ul>
        </div>
      </div>
    </StyledNavBar>
  );
}
