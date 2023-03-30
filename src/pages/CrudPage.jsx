/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import StyleCrudPage from '../styles/StyledCrudPage';
import {
  updateDrinks,
  updateCategories,
  updateIngredients,
} from '../services/adminActions';

export default function CrudPage() {
  const handleChooseEdit = (type) => {
    console.log('type entered', type);
    switch (type) {
      case 'drinks':
        updateDrinks();
        break;
      case 'categories':
        updateCategories();
        break;
      case 'ingredients':
        updateIngredients();
        break;
      default:
        break;
    }
  };

  return (
    <StyleCrudPage>
      <h1 className="header">start cruding</h1>

      <div className="card-options">
        <div
          data-test
          name="drinks"
          onClick={(e) => handleChooseEdit(e.target.name)}
        >
          <h1>CRUD </h1>
          <h1>DRINKS</h1>
        </div>

        <div
          data-test
          name="categories"
          onClick={(e) => handleChooseEdit(e.target.name)}
        >
          <h1>CRUD </h1>
          <h1>CATEGORIES</h1>
        </div>

        <div
          data-test
          name="ingredients"
          onClick={(e) => handleChooseEdit(e.target.name)}
        >
          <h1>CRUD </h1>
          <h1>INGREDIENTS</h1>
        </div>
      </div>
    </StyleCrudPage>
  );
}
