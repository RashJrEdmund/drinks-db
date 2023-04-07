/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import StyledSideBar from '../styles/StyledSideBar';
import { MyContext } from '../context/MyContext';

export default function SideBar() {
  const {
    Simulation,
    setFilterData,
    bodyref,
    customAlert,
    showMenu,
    setShowMenu,
  } = React.useContext(MyContext);

  const [showOptionList, setShowOptionList] = React.useState({
    Categories: true,
    Glasses: true,
    Ingredients: true,
    Alcoholic: true,
  });

  const formRef = React.useRef();

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

  const checkWhichIsChecked = () => {
    const { elements } = formRef.current;
    let isChecked = false;
    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].checked) isChecked = true;
    }

    if (!isChecked) {
      localStorage.removeItem('filteredDrinks');
      return false;
    }

    return true;
  };

  const handleSearch = () => {
    console.clear();
    customAlert('Filtering');

    const searchData = JSON.parse(localStorage.getItem('filteredDrinks'));

    const isChecked = checkWhichIsChecked();

    if (!isChecked || searchData.length <= 0) {
      setFilterData(Drinks);
      return;
    }

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

    setFilterData(finalResults);
  };

  // localStorage.clear();

  const handleFilterOptions = (e) => {
    console.clear();
    const isChecked = checkWhichIsChecked();

    if (!isChecked) return;

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

    // handleSearch();
  };

  const toggleOptionList = (nom) => {
    setShowOptionList((prev) => ({
      ...prev,
      [nom]: !prev[nom],
    }));
  };

  React.useEffect(() => {
    const searchData = JSON.parse(localStorage.getItem('fiteredDrinks'));

    if (searchData?.length <= 0) setFilterData(Drinks);
    // else handleSearch();
  }, []);

  return (
    <StyledSideBar showSide={showMenu.side}>
      {showMenu.side && (
        <div
          className="menu-list-overlay"
          onClick={() => {
            setShowMenu((prev) => ({ ...prev, side: !prev.side }));
          }}
        />
      )}

      <ul className="menu-list">
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

        <form ref={formRef} onChange={handleFilterOptions}>
          {filterOptions?.map(({ title }) => (
            <li className="filter_option" key={title}>
              <h2 onClick={() => toggleOptionList(title)}>
                {title}{' '}
                {showOptionList[title] ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </h2>

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
                            name="alcoholic_options" // it show's that all the radio types should have the same name before you'll be able to alternate between them
                          />
                          {capitalizedWord(val, true)}
                        </label>
                      )
                    ))}
            </li>
          ))}
        </form>
      </ul>
    </StyledSideBar>
  );
}
