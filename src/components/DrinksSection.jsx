/* eslint-disable react/no-array-index-key */
import React from 'react';

import StyledDrinksSection from '../styles/StyledDrinksSection';
import { MyContext } from '../context/MyContext';
import HomeDrinks from './HomeDrinks';

export default function DrinksSection() {
  const { Simulation, filterData } = React.useContext(MyContext);
  const { Drinks } = Simulation;

  const navIndx = +JSON.parse(localStorage.getItem('navigationIndx')) * 12 || 0;

  const [drinksToshow, setDrinksToShow] = React.useState({
    showInd: Math.ceil(filterData.length / 12) || navIndx / 12,
    showData: Drinks.filter(
      (drink, index) => index >= navIndx && index < navIndx + 12
    ),
  });

  const choseDrinksToShow = (ID) => {
    const id = ID * 12;
    const holder = drinksToshow;
    const data = filterData.length >= 1 ? filterData : Drinks;
    localStorage.setItem('navigationIndx', ID);
    holder.showInd = ID;
    holder.showData = data.filter(
      (drink, index) => index >= id && index < id + 12
    );

    setDrinksToShow({ ...holder });

    window.scrollTo(0, 0);
  };

  const whatToMap =
    filterData?.length <= 0 ? drinksToshow.showData : filterData;

  return (
    <StyledDrinksSection className="body-section" id="body_section">
      <HomeDrinks drinksToshow={whatToMap} showInd={drinksToshow.showInd} />

      <div className="navigation_btns">
        {new Array(Math.ceil((filterData.length || Drinks.length - 1) / 12))
          .fill('.')
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
