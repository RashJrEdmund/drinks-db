/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';
import StyledNavBar from '../styles/navbar.styles';

export default function Navbar() {
  const { userStatus, Simulation } = React.useContext(MyContext);
  const [showSideMenu, setShowSideMenu] = React.useState(false);
  const [showOptionList, setShowOptionList] = React.useState({
    Categories: false,
    Glasses: false,
    Ingredients: false,
    Alcoholic: false,
  });

  const navigate = useNavigate();

  const filterOptions = [
    {
      title: 'Categories',
    },
    {
      title: 'Glasses',
    },
    {
      title: 'Ingredients',
    },
    {
      title: 'Alcoholic',
      list: ['YES', 'NO', 'BOTH'],
    },
  ];

  const handleFilterOptions = (e) => {
    console.log('change happened in form', e.target.id);
  };

  const toggleOptionList = (nom) => {
    setShowOptionList(() => ({
      ...showOptionList,
      [nom]: !showOptionList[nom],
    }));
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
              {filterOptions?.map(({ title }) => (
                <li className="filter_option" key={title}>
                  <h2 onClick={() => toggleOptionList(title)}>{title}</h2>

                  {showOptionList[title] &&
                    (title !== 'Alcoholic'
                      ? Simulation[title].map(({ name }) => {
                          return (
                            <label htmlFor={name} key={name}>
                              <input type="checkbox" id={name} />
                              {name}
                            </label>
                          );
                        })
                      : filterOptions.pop().list.map(
                          // i'm using a tenary to check if it's the is alcoholic part already
                          (val) => (
                            <label htmlFor={val} key={val}>
                              <input
                                type="checkbox"
                                id={val}
                                name={`${val} val`}
                              />
                              {val}
                            </label>
                          )
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
