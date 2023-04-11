/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdInfo } from 'react-icons/md';
import { MyContext } from '../context/MyContext';

import StyledHomeDrinks from '../styles/StyledHomeDrinks';
import pourWineImg from '../images/pour_wine_glass_2.png';
import blueWine from '../images/blue_wine_glass.png';
import standingGlass from '../images/standing_wine_glass.png';
import wineGlasses from '../images/wine_glasses.png';

export default function HomeDrinks({ drinksToshow, showInd }) {
  const { bodyref, setItemModal } = React.useContext(MyContext);

  const handleToggleModal = (id) =>
    setItemModal({ items: drinksToshow, show: true, start: +id });

  return (
    <StyledHomeDrinks>
      <div ref={bodyref} className="drinks-container">
        {drinksToshow?.map((drink, ind) => {
          return (
            <div
              key={drink.id}
              className="drink"
              style={{ backgroundImage: `url("${drink.image_url}")` }}
            >
              <span
                className="drink_info_btn"
                title="tap to see drink info"
                onClick={() => handleToggleModal(ind)}
              >
                <MdInfo />
              </span>
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
