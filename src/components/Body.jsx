import React from 'react';

import StyledBody from '../styles/StyledBody';
import pourWineImg from '../images/pour_wine_glass_2.png';
import blueWine from '../images/blue_wine_glass.png';
import standingGlass from '../images/standing_wine_glass.png';
import wineGlasses from '../images/wine_glasses.png';
import MyContext from '../context/MyContext';

export default function Body() {
  const { Simulation } = React.useContext(MyContext);
  const { Drinks } = Simulation;
  const secondHalf = [];

  if (Drinks.length > 10) {
    for (
      let i = Math.floor((Drinks.length - 1) / 2);
      i < Drinks.length - 1;
      i += 1
    ) {
      secondHalf.push(Drinks[i]);
    }
  }

  return (
    <StyledBody className="body-section" id="body_section">
      <div className="drinks-container">
        {Drinks?.map((drink, index) =>
          index <= Math.floor((Drinks.length - 1) / 2) && Drinks.length > 10 ? (
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
          ) : (
            ''
          )
        )}
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
