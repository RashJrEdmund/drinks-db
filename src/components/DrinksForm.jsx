/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function DrinksForm(props) {
  const [drinkData, setDrinkData] = React.useState(props?.drink);
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

  return (
    <div className="drink-form_container">
      <div className="drink_form_overlay" />

      <button
        type="button"
        onClick={() => props.setEdit((prev) => ({ ...prev, drinks: false }))}
      >
        cancel
      </button>

      <form onSubmit={handleAddRecipe}>
        <h3>Edit Drink</h3>
        <h4>drink.name</h4>
        <input
          type="text"
          name="description"
          placeholder="drink description"
          defaultValue="drink.description"
        />

        <span>
          <input type="text" name="recipe" placeholder="add recipe" />
          <button type="submit">add recipe</button>
        </span>

        {drinkData?.recipe.map((peice) => (
          <div key={peice} className="recipe-option">
            <p>{peice}</p>
            <button type="button">del</button>
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
  );
}
