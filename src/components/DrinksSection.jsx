/* eslint-disable react/no-array-index-key */
import React from 'react';

import StyledDrinksSection from '../styles/StyledDrinksSection';
import { MyContext } from '../context/MyContext';
import HomeDrinks from './HomeDrinks';

export default function DrinksSection() {
  const { Simulation, filterData } = React.useContext(MyContext);
  const { Drinks } = Simulation;
  const secondHalf = [];
  // const localDrinks = JSON.parse(localStorage.getItem('localDrinks'));
  const [drinksToshow, setDrinksToShow] = React.useState({
    showInd: 0,
    showData: Drinks.filter((drink, index) => index >= 0 && index < 12),
  });

  React.useEffect(() => {
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

  const choseDrinksToShow = (ID) => {
    const id = ID * 12;
    const holder = drinksToshow;
    holder.showInd = ID;
    holder.showData = Drinks.filter(
      (drink, index) => index >= id && index < id + 12
    );

    setDrinksToShow({ ...holder });
    console.log('i been clicked', id);
  };

  return (
    <StyledDrinksSection className="body-section" id="body_section">
      <HomeDrinks drinksToshow={drinksToshow.showData} />

      <div className="navigation_btns">
        {new Array(Math.ceil((Drinks.length - 1) / 12))
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