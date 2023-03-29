/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import MyContext from '../context/MyContext';
import StyledNavBar from '../styles/navbar.styles';
import ProfileDropDown from './ProfileDropDown';

export default function Navbar() {
  const { currentUser, Simulation, setFilterData, bodyref, customAlert } =
    React.useContext(MyContext);
  const [showMenu, setShowMenu] = React.useState({
    side: false,
    dropDown: false,
  });

  const [showOptionList, setShowOptionList] = React.useState({
    Categories: false,
    Glasses: false,
    Ingredients: false,
    Alcoholic: false,
  });

  const navRef = React.useRef();

  const { Drinks } = Simulation;

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
      list: ['yes', 'no', 'both'],
    },
  ];

  const capitalizedWord = (word, all = false) => {
    if (all) {
      return word.toUpperCase();
    }

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  React.useEffect(() => {
    const localDrinks = JSON.parse(localStorage.getItem('localDrinks'));
    if (!localDrinks) {
      localStorage.setItem('localDrinks', JSON.stringify(Drinks));
    }
  }, []);

  React.useEffect(() => {
    let YscrollHolder = 0;
    window.addEventListener('scroll', () => {
      if (
        (!showMenu.side || showMenu.dropDown) &&
        window.scrollY >= YscrollHolder
      )
        navRef.current?.classList.add('active_navBar_container');
      else navRef.current?.classList.remove('active_navBar_container');

      YscrollHolder = window.scrollY;
    });
  }, [showMenu.side]);

  const handleSearch = () => {
    console.clear();
    // if (1 === 2) {
    customAlert('Filtering');
    // }

    const searchData = JSON.parse(localStorage.getItem('filteredDrinks'));

    const results = searchData?.map((item) => {
      const newItem = item.split(','); // newItem looks like ['categories', 'wine']
      console.log('newIt[0]', newItem[0], Drinks[0][newItem[0].toLowerCase()]);

      return Drinks.filter(
        (drink) => drink[newItem[0].toLowerCase()] === newItem[1]
      );
    });

    let finalResults = [];

    results?.forEach((res) => {
      finalResults = [...finalResults, ...res]; // i'm doing this since finalResults is at first an array of arrays
    });

    /* Since i'm having multiple repeated values, i'll change my array to a set, then spread it 
    or use the Array.from(finalResults) to create a new a array with unique entries */

    console.log('this new set', new Set(finalResults));
    finalResults = Array.from(new Set(finalResults));
    localStorage.setItem('localDrinks', JSON.stringify(finalResults));

    console.log(
      'this searchDAta',
      searchData,
      '\n',
      finalResults,
      '\n',
      results
    );
  };

  // localStorage.clear();

  const handleFilterOptions = (e) => {
    console.clear();

    const localData = JSON.parse(localStorage.getItem('filteredDrinks'));
    if (!localData) {
      localStorage.setItem('filteredDrinks', JSON.stringify([e.target.id]));
    } else if (localData?.includes(e.target.id)) {
      const holder = JSON.parse(localStorage.getItem('filteredDrinks')).filter(
        (item) => item !== e.target.id
      );

      localStorage.setItem('filteredDrinks', JSON.stringify(holder));
    } else {
      localStorage.setItem(
        'filteredDrinks',
        JSON.stringify([...localData, e.target.id])
      );
    }

    setFilterData(JSON.parse(localStorage.getItem('filteredDrinks')));

    // handleSearch();
  };

  const toggleOptionList = (nom) => {
    setShowOptionList((prev) => ({
      ...prev,
      [nom]: !prev[nom],
    }));
  };

  return (
    <StyledNavBar>
      <div ref={navRef} className="navBar-container">
        <div className="left_group">
          <button
            className="side_menu_btn"
            type="button"
            onClick={() => {
              setShowMenu((prev) => ({ ...prev, side: !prev.side }));
            }}
          >
            {showMenu.side ? 'close Filter' : 'open Filter'}
          </button>

          <p className="user_status">
            user Status:{' '}
            <span>
              {currentUser?.is_admin
                ? 'Admin'
                : (currentUser && 'Api User') || 'Guest'}
            </span>
          </p>
        </div>

        <span
          className="profile_section"
          tabIndex="0"
          onClick={() =>
            setShowMenu((prev) => ({ ...prev, dropDown: !prev.dropDown }))
          }
          onBlur={() => setShowMenu((prev) => ({ ...prev, dropDown: false }))}
        >
          <div className="profile_logo" title="go to profile" />
          <span>{currentUser?.last_name || 'userName'}</span>

          {/* This the profileDropDown */}

          {showMenu.dropDown && <ProfileDropDown />}
        </span>

        {showMenu.side && (
          <div
            className="menu-list-overlay"
            onClick={() => {
              setShowMenu((prev) => ({ ...prev, side: !prev.side }));
            }}
          />
        )}

        <ul
          className={showMenu.side ? 'menu-list active-menu-list' : 'menu-list'}
        >
          <li className="result_count">
            showing:{' '}
            <span
              className="count"
              onClick={() => {
                setShowMenu((prev) => ({ ...prev, side: false }));
                window.scrollTo(0, bodyref.current.offsetTop);
              }}
            >
              {`${Drinks.length} Product${Drinks.length > 1 ? 's' : ''}`}
            </span>
          </li>

          <button className="filter_btn" type="button" onClick={handleSearch}>
            Filter
          </button>

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
                            {capitalizedWord(name)}
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
                            {capitalizedWord(val, true)}
                          </label>
                        )
                      ))}
              </li>
            ))}
          </form>
        </ul>
      </div>
    </StyledNavBar>
  );
}
