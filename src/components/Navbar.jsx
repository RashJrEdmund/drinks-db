/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';
import StyledNavBar from '../styles/navbar.styles';

export default function Navbar() {
  const { userStatus, Simulation, filterData, setFilterData, bodyref } =
    React.useContext(MyContext);
  const [showSideMenu, setShowSideMenu] = React.useState(false);
  const [showOptionList, setShowOptionList] = React.useState({
    Categories: false,
    Glasses: false,
    Ingredients: false,
    Alcoholic: false,
  });

  const { Drinks } = Simulation;

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
  // localStorage.setItem('selectedFilters', []);

  const handleFilterOptions = (e) => {
    // localStorage.setItem('selectedFilters', JSON.stringify(e.target.id))
    // e.preventDefault();
    console.clear();
    setFilterData(() => {
      if (filterData.includes(e.target.id)) {
        return filterData.filter((item) => item !== e.target.id);
      }
      return [...filterData, e.target.id];
    });
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
              showing:{' '}
              <span
                className="count"
                onClick={() => window.scrollTo(0, bodyref.current.offsetTop)}
              >
                {`${Drinks.length} Product${Drinks.length > 1 ? 's' : ''}`}
              </span>
            </li>

            <form onChange={handleFilterOptions}>
              {filterOptions?.map(({ title }) => (
                <li className="filter_option" key={title}>
                  <h2 onClick={() => toggleOptionList(title)}>{title}</h2>

                  {showOptionList[title] &&
                    (title !== 'Alcoholic'
                      ? Simulation[title].map(({ name }) => {
                          return (
                            <label htmlFor={[title, name]} key={name}>
                              <input type="checkbox" id={[title, name]} />
                              {name}
                            </label>
                          );
                        })
                      : filterOptions.pop().list.map(
                          // i'm using a tenary to check if it's the is alcoholic part already
                          (val) => (
                            <label htmlFor={['Alcoholic', val]} key={val}>
                              <input
                                type="radio"
                                id={['Alcoholic', val]}
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
