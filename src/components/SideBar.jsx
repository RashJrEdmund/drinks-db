/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import StyledSideBar from '../styles/StyledSideBar';
import { MyContext } from '../context/MyContext';
import FetchHOC from '../HOFs/FetchHOC';

function SideBar({ fetchedData }) {
  const {
    // filterData,
    setFilterData,
    bodyref,
    showMenu,
    setShowMenu,
    setLoadingAnime,
  } = React.useContext(MyContext);

  const [showOptionList, setShowOptionList] = React.useState({
    Categories: true,
    Glasses: true,
    Ingredients: true,
    Alcoholic: true,
  });

  const [filterOptions, setFilterOptions] = React.useState([]);

  const formRef = React.useRef();

  const { Drinks, Categories, Ingredients, Glasses } = fetchedData;

  React.useEffect(() => {
    setFilterOptions([
      {
        title: 'Categories',
        list:
          Categories.length > 0
            ? Categories
            : [{ name: 'cat 1' }, { name: 'cat 2' }, { name: 'cat 3' }],
      },
      {
        title: 'Ingredients',
        list:
          Ingredients.length > 0
            ? Ingredients
            : [{ name: 'ing 1' }, { name: 'ing 2' }, { name: 'ing 3' }],
      },
      {
        title: 'Glasses',
        list:
          Glasses.length > 0
            ? Glasses
            : [{ name: 'glass 1' }, { name: 'glass 2' }, { name: 'glass 3' }],
      },
      {
        title: 'Alcoholic',
        list: ['yes', 'no', 'both'],
      },
    ]);

    console.log(
      'this cate... in sideBar',
      // filterOptions,
      Categories,
      Ingredients,
      Glasses
    );
  }, []);

  const capitalizedWord = (word, all = false) => {
    if (all) {
      return word.toUpperCase();
    }

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const checkWhichIsChecked = () => {
    const { elements } = formRef.current;
    let isChecked = false;

    [...elements]?.forEach((el) => {
      if (el.checked) isChecked = true;
    });

    if (!isChecked) {
      localStorage.removeItem('filteredDrinks');
      return false;
    }

    return true;
  };

  const handleSearch = () => {
    setLoadingAnime({ message: 'Filtering...', show: true });

    const searchData = JSON.parse(sessionStorage.getItem('filteredDrinks'));

    const isChecked = checkWhichIsChecked();

    if (!isChecked || searchData.length <= 0) {
      setTimeout(() => {
        setLoadingAnime({ message: '', show: false });
      }, 1500);

      setFilterData(Drinks);
      return;
    }

    setTimeout(() => {
      const results = searchData?.map((item) => {
        const newItem = item.split(','); // newItem looks like ['categories', 'wine']

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

      finalResults = Array.from(new Set(finalResults));

      setLoadingAnime({ message: '', show: false });

      setFilterData(finalResults);
    }, 1500);
  };

  // sessionStorage.clear();

  const handleFilterOptions = (e) => {
    const isChecked = checkWhichIsChecked();

    if (!isChecked) return;

    const sessionChoices = JSON.parse(sessionStorage.getItem('filteredDrinks'));
    if (!sessionChoices) {
      sessionStorage.setItem('filteredDrinks', JSON.stringify([e.target.id]));
    } else if (sessionChoices?.includes(e.target.id)) {
      const holder = JSON.parse(
        sessionStorage.getItem('filteredDrinks')
      ).filter((item) => item !== e.target.id);

      sessionStorage.setItem('filteredDrinks', JSON.stringify(holder));
    } else {
      sessionStorage.setItem(
        'filteredDrinks',
        JSON.stringify([...sessionChoices, e.target.id])
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
    const searchData = JSON.parse(sessionStorage.getItem('fiteredDrinks'));

    if (!searchData || searchData?.length <= 0) setFilterData(Drinks);
    else handleSearch();
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
            {Drinks?.length} Product{Drinks?.length > 1 ? 's' : ''}
          </span>
        </li>

        <button className="filter_btn" type="button" onClick={handleSearch}>
          Filter
        </button>

        <form ref={formRef} onChange={handleFilterOptions}>
          {filterOptions?.map(({ title, list }) => (
            <li className="filter_option" key={title}>
              <h2
                title={`close and open to quick clear options selected ${title}`}
                onClick={() => toggleOptionList(title)}
              >
                {title}{' '}
                {showOptionList[title] ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </h2>

              {showOptionList[title] &&
                (title !== 'Alcoholic'
                  ? list?.map(({ name }) => {
                      return (
                        <label htmlFor={[title, name]} key={name}>
                          <input type="checkbox" id={[title, name]} />
                          {capitalizedWord(name)}
                        </label>
                      );
                    })
                  : list.map((val) => (
                      <label
                        htmlFor={
                          val === 'yes'
                            ? ['Alcoholic', true]
                            : val === 'no'
                            ? ['Alcoholic', false]
                            : ['Alcoholic', 'null']
                        }
                        key={val}
                      >
                        <input
                          type="radio"
                          id={
                            val === 'yes'
                              ? ['Alcoholic', true]
                              : val === 'no'
                              ? ['Alcoholic', false]
                              : ['Alcoholic', 'null']
                          }
                          name="alcoholic_options" // it show's that all the radio types should have the same name before you'll be able to alternate between them
                        />
                        {capitalizedWord(val, true)}
                      </label>
                    )))}
            </li>
          ))}
        </form>
      </ul>
    </StyledSideBar>
  );
}

export default FetchHOC(SideBar);
