import React from 'react';

import StyledBody from '../styles/StyledBody';
import pourWineImg from '../images/pour_wine_glass_2.png';
import blueWine from '../images/blue_wine_glass.png';
import standingGlass from '../images/standing_wine_glass.png';
import wineGlasses from '../images/wine_glasses.png';
import { MyContext } from '../context/MyContext';

export default function Body() {
  const { Simulation, bodyref, filterData } = React.useContext(MyContext);
  const { Drinks } = Simulation;
  const secondHalf = [];
  const localDrinks = JSON.parse(localStorage.getItem('localDrinks'));

  // let overallDrinkHolder = [];

  // if (Drinks.length > 12 || Drinks.length % 12 === 0) {
  //   console.clear();
  //   let dotLength = 0;
  //   for (let k = 0; k < Math.ceil(Drinks.length % 12); k += 1) {
  //     dotLength += 1;
  //   }

  //   overallDrinkHolder[0] = [Drinks[0]];
  //   console.log('this first overallDrinkHolder', overallDrinkHolder);

  //   let start = 0;
  //   let end = 12;

  //   for (let i = 0; i < dotLength; i += 1) {
  //     for (let j = start; j < end; j += 1) {
  //       overallDrinkHolder[i] = [...overallDrinkHolder[i], Drinks[j]];
  //     }

  //     start = end;
  //     end += Drinks.length - end > 12 ? 12 : Drinks.length - 12;
  //   }
  //   overallDrinkHolder = Drinks.slice(0, Drinks[12]);
  //   console.log('this overallDrinkHolder', overallDrinkHolder, dotLength);
  // }

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

  return (
    <StyledBody className="body-section" id="body_section">
      <div ref={bodyref} className="drinks-container">
        {localDrinks?.map((drink, ind, arr) => {
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
    </StyledBody>
  );
}
