/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import FetchHOC from '../HOCs/FetchHOC';

import StyledDrinksSection from '../styles/StyledDrinksSection';
import HomeDrinks from './HomeDrinks';

function DrinksSection({ fetchedData }) {
  const { Drinks } = fetchedData;
  const displayLength = 12;

  const navIndx =
    +JSON.parse(sessionStorage.getItem('navigationIndx')) * displayLength || 0;

  const [drinksToshow, setDrinksToShow] = React.useState({
    showInd: navIndx / displayLength,
    showData: [],
  });

  const choseDrinksToShow = (id) => {
    const holder = drinksToshow;
    sessionStorage.setItem('navigationIndx', id);
    holder.showInd = id;
    holder.showData = Drinks.filter(
      (_, index) =>
        index >= id * displayLength &&
        index < id * displayLength + displayLength
    );

    setDrinksToShow({ ...holder });

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const data = Drinks?.filter(
      (drink, index) => index >= navIndx && index < navIndx + displayLength
    );

    setDrinksToShow({
      showInd: navIndx / displayLength,
      showData: data,
    });
  }, []);

  return (
    <StyledDrinksSection className="body-section" id="body_section">
      <HomeDrinks
        drinksToshow={drinksToshow.showData}
        showInd={drinksToshow.showInd}
      />

      <div className="navigation_btns">
        {new Array(Math.ceil(Drinks.length / displayLength))
          .fill(' ')
          .map((_, ind) => (
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

export default FetchHOC(DrinksSection);
