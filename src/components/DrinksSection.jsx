/* eslint-disable react/no-array-index-key */
import React from 'react';

import StyledDrinksSection from '../styles/StyledDrinksSection';
import { MyContext } from '../context/MyContext';
import HomeDrinks from './HomeDrinks';

export default function DrinksSection() {
  const { fetchedData } = React.useContext(MyContext);
  const { Drinks } = fetchedData;

  const navIndx = +JSON.parse(localStorage.getItem('navigationIndx')) * 12 || 0;

  const [drinksToshow, setDrinksToShow] = React.useState({
    showInd: navIndx / 12,
    showData: Drinks.filter(
      (drink, index) => index >= navIndx && index < navIndx + 12
    ),
  });

  const choseDrinksToShow = (id) => {
    const holder = drinksToshow;
    localStorage.setItem('navigationIndx', id);
    holder.showInd = id;
    holder.showData = Drinks.filter(
      (_, index) => index >= id * 12 && index < id * 12 + 12
    );

    setDrinksToShow({ ...holder });

    window.scrollTo(0, 0);
  };

  return (
    <StyledDrinksSection className="body-section" id="body_section">
      <HomeDrinks
        drinksToshow={drinksToshow.showData}
        showInd={drinksToshow.showInd}
      />

      <div className="navigation_btns">
        {new Array(Math.ceil((Drinks.length - 1) / 12))
          .fill(' ')
          .map((dot, ind) => (
            <span key={ind} id={ind}>
              <button
                id={ind}
                className={drinksToshow.showInd === ind ? 'active_dot' : ''}
                type="button"
                onClick={({ target }) => choseDrinksToShow(+target.id)}
              >
                {ind + 1}
              </button>
            </span>
          ))}
      </div>
    </StyledDrinksSection>
  );
}
