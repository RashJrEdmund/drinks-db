/* eslint-disable react/prop-types */
import React from 'react';
import { MyContext } from '../context/MyContext';

import StyledHomeDrinks from '../styles/StyledHomeDrinks';
import pourWineImg from '../images/pour_wine_glass_2.png';
import blueWine from '../images/blue_wine_glass.png';
import standingGlass from '../images/standing_wine_glass.png';
import wineGlasses from '../images/wine_glasses.png';

export default function HomeDrinks({ drinksToshow }) {
  const { Simulation, bodyref, filterData } = React.useContext(MyContext);
  const { Drinks } = Simulation;
  const secondHalf = [];

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

    if (Drinks.length >= 10) {
      for (let i = Math.floor(Drinks.length / 2); i < Drinks.length; i += 1) {
        secondHalf.push(Drinks[i]);
      }
    }

    sortDrinks();
  }, []);

  return (
    <StyledHomeDrinks>
      <div ref={bodyref} className="drinks-container">
        {drinksToshow?.map((drink, ind, arr) => {
          if (
            arr.length >= 10 &&
            (arr.length % 2 !== 0 && Math.floor(arr.length / 2) % 2 !== 0
              ? ind >= Math.ceil(arr.length / 2)
              : ind >= Math.floor(arr.length / 2))
          ) {
            return arr.length % 2 === 0 ? (
              <p>
                even num <br />
              </p>
            ) : (
              <p>
                odd num <br />
              </p>
            );
          }

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

      <div className="drinks-container_2">
        {secondHalf?.map((drink) => (
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
        ))}
      </div>

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
    </StyledHomeDrinks>
  );
}
