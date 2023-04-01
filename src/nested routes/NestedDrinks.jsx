/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import data from '../data/DataSimulation.json';
import DrinksForm from '../components/DrinksForm';

const StlydeNestedDrinks = styled.div`
  display: flex;
  flex-direction: column;

  .create-new-btn {
    margin: 0 0 1rem;
    padding: 10px;
    box-shadow: 0 0 10px #a52a2a;
  }

  .drinks-container {
    width: 97vw;
    max-width: 1224px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 10px auto 0;
    padding: 0 0 4rem;

    .drink {
      border: 1px solid #a52a2a;
      padding: 10px;
      height: 250px;
      width: 100%;
      border-radius: 10px;
      cursor: default;

      * {
        cursor: default;
      }

      .action-btns {
        display: flex;
        justify-content: space-between;
        width: 60%;
        max-width: 200px;
        margin: 2rem auto 0;

        button {
          border: 1px solid #a52a2a;
          /* cursor: pointer; */
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .drinks-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 500px) {
    .drinks-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default function NestedDrinks(props) {
  // const localDrinks = JSON.parse(localStorage.getItem('localDrinks'));

  const bodyref = React.useRef();

  const { Drinks } = data;

  const handleDeleteDrink = (e) => {
    console.log(e, 'clicked', props);
  };

  return (
    <StlydeNestedDrinks>
      {props?.edit?.drinks && <DrinksForm setEdit={props?.setEdit} />}

      <button className="create-new-btn" type="button">
        create New
      </button>

      <div ref={bodyref} className="drinks-container">
        {Drinks?.map((drink) => (
          <div
            key={drink.id}
            className="drink"
            style={{ backgroundImage: `url("${drink.image_url}")` }}
          >
            <div style={{ backgroundImage: `url("${drink.image_url}")` }} />
            <h3>
              {drink.name} {drink.id}
            </h3>
            <p>{drink.description}</p>

            <div className="action-btns">
              <button
                name={drink.id}
                type="button"
                onClick={(e) => handleDeleteDrink(+e.target.name)}
              >
                del
              </button>

              <button
                name={drink.id}
                type="button"
                onClick={() =>
                  props?.setEdit((prev) => ({ ...prev, drinks: true }))
                }
              >
                edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </StlydeNestedDrinks>
  );
}
