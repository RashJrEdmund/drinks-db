import React from 'react';

import StyledBody from '../styles/StyledBody';
import pourWineImg from '../images/pour_wine_glass_2.png';
import blueWine from '../images/blue_wine_glass.png';
import standingGlass from '../images/standing_wine_glass.png';
import wineGlasses from '../images/wine_glasses.png';
import MyContext from '../context/MyContext';

import API_BASE_URL from '../constants';

export default function Body() {
  const { Simulation, bodyref, filterData } = React.useContext(MyContext);
  const { Drinks } = Simulation;
  const secondHalf = [];
  const localDrinks = JSON.parse(localStorage.getItem('localDrinks'));

  console.log(
    'this apibaseurl',
    API_BASE_URL,
    process.env.REACT_APP_API_BASE_URL
  );

  const sortDrinks = () => {
    const holder = filterData;
    holder.forEach((item) => {
      const newItem = item.split(',');
      console.log('this item', newItem);
    });
    console.log('this data', holder);
  };

  if (Drinks.length > 10) {
    for (
      let i = Math.floor((Drinks.length - 1) / 2);
      i < Drinks.length - 1;
      i += 1
    ) {
      secondHalf.push(Drinks[i]);
    }
  }

  sortDrinks();

  return (
    <StyledBody className="body-section" id="body_section">
      <div ref={bodyref} className="drinks-container">
        {localDrinks?.map((drink, index) => (
          <div
            key={(drink.name, index)}
            className="drink"
            style={{ backgroundImage: `url("${drink.image_url}")` }}
          >
            <h3>
              {drink.name} {index + 1}
            </h3>
            <p>{drink.description}</p>
          </div>
        ))}
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
        {secondHalf?.map((drink, index) => (
          <div
            key={(drink.name, index)}
            className="drink"
            style={{ backgroundImage: `url("${drink.image_url}")` }}
          >
            <h3>
              {drink.name} {index + 7}
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
