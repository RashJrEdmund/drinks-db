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
  // const filterBtnRef = React.useRef();

  // React.useEffect(() => {
  //   document.body.addEventListener('click', (e) => {
  //     e.stopPropagation();
  //     console.clear();
  //     console.log('body clicked', e.target);
  //     if (e.target !== filterBtnRef.current) {
  //       setShowSideMenu(false);
  //       console.log('event caught');
  //     }
  //   });
  // }, []);

  const filterOptions = [
    {
      title: 'Categories',
      list: ['option_1', 'option_2', 'option_3', 'option_4'],
    },
    {
      title: 'Glasses',
      list: ['option_1', 'option_2', 'option_3', 'option_4'],
    },
    {
      title: 'Ingredients',
      list: ['option_1', 'option_2', 'option_3', 'option_4'],
    },
    {
      title: 'Alcoholic',
      list: ['YES', 'NO', 'BOTH'],
    },
  ];

  const handleFilterOptions = (e) => {
    console.log('change happened in form', e.target.id);
  };

  return (
    <StyledNavBar>
      <div className="navBar-container">
        <button
          // ref={filterBtnRef}
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

        <div className="side_menu">
          <ul
            className={
              showSideMenu ? 'menu-list active-menu-list' : 'menu-list'
            }
          >
            <li className="result_count">
              showing: <span className="count">6 products</span>
            </li>

            <form onChange={handleFilterOptions}>
              {filterOptions?.map((option) => (
                <li className="filter_option" key={option.title}>
                  <h2>{option.title}</h2>

                  {option.list.map((list) => (
                    <label htmlFor={list} key={list}>
                      <input type="checkbox" id={list} />
                      {list}
                    </label>
                  ))}
                </li>
              ))}
            </form>
          </ul>
        </div>
      </div>
    </StyledNavBar>
  );
}
