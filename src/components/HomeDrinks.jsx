/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { MyContext } from '../context/MyContext';

import StyledHomeDrinks from '../styles/StyledHomeDrinks';
import pourWineImg from '../images/pour_wine_glass_2.png';
import blueWine from '../images/blue_wine_glass.png';
import standingGlass from '../images/standing_wine_glass.png';
import wineGlasses from '../images/wine_glasses.png';

export default function HomeDrinks({ drinksToshow, showInd }) {
  const { bodyref /* filterData */ } = React.useContext(MyContext);

  React.useEffect(() => {
    // console.clear();
    // console.log('this drinks to show', drinksToshow);
    // const sortDrinks = () => {
    //   const holder = filterData;
    //   holder.forEach((item) => {
    //     const newItem = item.split(',');
    //     console.log('this item', newItem);
    //   });
    //   console.log('this data', holder);
    // };
    // sortDrinks();
  }, []);

  const handleDrinkDescription = (e) => {
    const { target } = e;
    if (target.className.includes('active_description')) {
      target.classList.remove('active_description');
      return;
    }

    target.classList.add('active_description');
  };

  return (
    <StyledHomeDrinks>
      <div ref={bodyref} className="drinks-container">
        {drinksToshow?.map((drink) => {
          return (
            <div
              key={drink.id}
              title="tap to see drink info"
              className="drink"
              style={{ backgroundImage: `url("${drink.image_url}")` }}
            >
              <p onClick={handleDrinkDescription}>{drink.description}</p>
              <h3>
                {drink.name} {drink.id}
              </h3>
            </div>
          );
        })}
      </div>

      {showInd % 2 === 0 && (
        <div className="body_images">
          <div
            className="first_img"
            style={{ backgroundImage: `url(${pourWineImg})` }}
          />
          <div
            className="first_img"
            style={{ backgroundImage: `url(${standingGlass})` }}
          />
        </div>
      )}

      {showInd % 2 !== 0 && (
        <div className="body_images">
          <div
            className="first_img"
            style={{ backgroundImage: `url(${blueWine})` }}
          />
          <div
            className="first_img"
            style={{ backgroundImage: `url(${wineGlasses})` }}
          />
        </div>
      )}
    </StyledHomeDrinks>
  );
}
