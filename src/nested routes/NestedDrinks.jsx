import React from 'react';
import styled from '@emotion/styled';

const StlydeNestedDrinks = styled.div`
  display: flex;
  flex-direction: column;

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

export default function NestedDrinks() {
  const localDrinks = JSON.parse(localStorage.getItem('localDrinks'));

  const bodyref = React.useRef();

  return (
    <StlydeNestedDrinks>
      <button className="create-new-btn" type="button">
        create New
      </button>
      <div ref={bodyref} className="drinks-container">
        {localDrinks?.map((drink, index) => (
          <div
            key={(drink.name, index)}
            className="drink"
            style={{ backgroundImage: `url("${drink.image_url}")` }}
          >
            <div style={{ backgroundImage: `url("${drink.image_url}")` }} />
            <h3>
              {drink.name} {index + 1}
            </h3>
            <p>{drink.description}</p>
          </div>
        ))}
      </div>
    </StlydeNestedDrinks>
  );
}
