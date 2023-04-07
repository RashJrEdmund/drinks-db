/* eslint-disable react/prop-types */
import React from 'react';
import { MyContext } from '../context/MyContext';

import StyledHomeDrinks from '../styles/StyledHomeDrinks';
import pourWineImg from '../images/pour_wine_glass_2.png';
import blueWine from '../images/blue_wine_glass.png';
import standingGlass from '../images/standing_wine_glass.png';
import wineGlasses from '../images/wine_glasses.png';

export default function HomeDrinks({ drinksToshow, showInd }) {
  const { bodyref, filterData } = React.useContext(MyContext);

  React.useEffect(() => {
    console.clear();
    console.log('this drinks to show', drinksToshow);
    const sortDrinks = () => {
      const holder = filterData;
      holder.forEach((item) => {
        const newItem = item.split(',');
        console.log('this item', newItem);
      });
      console.log('this data', holder);
    };

    sortDrinks();
  }, []);

  return (
    <StyledHomeDrinks>
      <div ref={bodyref} className="drinks-container">
        {drinksToshow?.map((drink) => {
          return (
            <div
              key={drink.id}
              className="drink"
              style={{ backgroundImage: `url("${drink.image_url}")` }}
            >
              <h3>
                {drink.name} {drink.id}
              </h3>
              <p>{drink.description}</p>
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
