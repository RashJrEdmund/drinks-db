/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from '@emotion/styled';

const StyledDrinksFrom = styled.div`
  .drink_form_overlay {
    position: fixed;
    background-color: #00000086;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
  }

  @keyframes formAnime {
    from {
      top: -50%;
    }
    to {
      top: 50%;
    }
  }

  .form_container {
    animation: formAnime;
    animation-duration: 0.6s;

    position: fixed;
    background-color: #000000e2;
    top: 50%;
    left: 50%;
    width: 97vw;
    max-width: 650px;
    height: fit-content;
    max-height: 97vh;
    overflow: auto;
    transform: translate(-50%, -50%);
    z-index: 4;

    display: flex;
    flex-direction: column;
    padding: 1rem 10px 2rem;

    [name='cancel-btn'] {
      background: none;
      color: #a52a2a;
      font-weight: 600;
      font-size: 1.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin: 1rem 0 0;

      h3 {
        width: 100%;
        color: #f5f5f5;

        &:nth-of-type(2) {
          border-bottom: 1px solid #f5f5f5;
          padding: 0 0 5px 0;
        }
      }

      textarea {
        min-height: 35px;
        width: 100%;
        padding: 10px;
        margin: 7px 0;
        line-height: 20px;
      }

      span {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        gap: 10px;

        input {
          height: 35px;
          width: 100%;
          padding: 10px;
        }

        .add_recipe_btn {
          background: none;
          min-width: 40px;
          color: #f5f5f5;
          font-weight: 1000;
          padding: 0;
          font-size: 2.5rem;
        }
      }

      .recipe-option {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: flex-start;
        gap: 10px;

        p {
          color: #f5f5f5;
          background-color: gold;
          text-align: left;
          height: fit-content;
          width: 100%;
          padding: 10px;
          word-wrap: break-word;
          word-break: normal;
        }

        button {
          background: none;
          background-color: gold;
          min-width: 40px;
          color: #a52a2a;
          font-weight: 1000;
          padding: 0;
          font-size: 2.5rem;
          border-radius: 100px;
        }
      }

      .submit-drink-btn {
        margin: 1rem auto 0;
        width: 100%;
        padding: 10px 0;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }
`;

export default function DrinksForm(props) {
  const { drink, setEdit } = props;
  const [drinkData, setDrinkData] = React.useState(drink.chosenOne);

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const { target } = e;
    if (!target.recipe.value) return;
    setDrinkData((prev) => [...prev, target.recipe.value]);

    target.recipe.value = '';
  };

  const submitDrinkFrom = () => {
    console.log('handle post Drink');
  };

  const closeForm = () => {
    setEdit((prev) => {
      const holder = prev;
      holder.drink.show = false;
      return { ...holder };
    });
  };

  return (
    <StyledDrinksFrom>
      <div
        className="drink_form_overlay"
        onClick={() => setEdit((prev) => ({ ...prev, drinks: false }))}
      />

      <div className="form_container">
        <button name="cancel-btn" type="button" onClick={closeForm}>
          cancel
        </button>

        <form onSubmit={handleAddRecipe}>
          <h3>Edit Drink</h3>
          <h3>{drinkData.name}</h3>

          <textarea
            cols="30"
            rows="10"
            type="text"
            name="description"
            placeholder="drink description"
            defaultValue={drinkData.description}
          />

          <span>
            <input type="text" name="recipe" placeholder="add recipe" />
            <button className="add_recipe_btn" type="submit">
              +
            </button>
          </span>

          {drinkData?.recipe?.map((peice) => (
            <div key={peice} className="recipe-option">
              <p>{peice}</p>
              <button type="button">x</button>
            </div>
          ))}

          <button
            type="button"
            className="submit-drink-btn"
            onClick={submitDrinkFrom}
          >
            submit Drink
          </button>
        </form>
      </div>
    </StyledDrinksFrom>
  );
}
