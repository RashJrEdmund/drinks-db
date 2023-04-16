/* eslint-disable react/prop-types */
import React from 'react';
import { MyContext } from '../context/MyContext';

import {
  postCategory,
  patchCategory,
  postIngredient,
  patchIngredient,
} from '../api/authentication';

export default function CategoryIngredientFrom(props) {
  const { edit, setEdit } = props;

  const { customAlert, setLoadingAnime } = React.useContext(MyContext);

  const handleCategory = async (category) => {
    if (edit.type === 'create') {
      await postCategory(category)
        .then(() => customAlert('category saved'))
        .catch(() => customAlert('could not create category'))
        .finally(() => setLoadingAnime({ messagee: '', show: false }));
    } else {
      await patchCategory(category)
        .then(() => customAlert('category saved'))
        .catch(() => customAlert('could not saved category'))
        .finally(() => setLoadingAnime({ messagee: '', show: false }));
    }
  };

  const handleIngredient = async (ingredient) => {
    if (edit.type === 'create') {
      await postIngredient(ingredient)
        .then(() => customAlert('ingredient saved'))
        .catch(() => customAlert('could not create ingredient'))
        .finally(() => setLoadingAnime({ messagee: '', show: false }));
    } else {
      await patchIngredient(ingredient)
        .then(() => customAlert('ingredient saved'))
        .catch(() => customAlert('could not saved ingredient'))
        .finally(() => setLoadingAnime({ messagee: '', show: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingAnime({
      messagee: `${edit.type.slice(0, edit.type.length - 1)}ing...`,
      show: true,
    });

    const { itemName, description } = e.tartget;

    const holder = edit?.chosenOne;
    holder.name = itemName.value;
    holder.description = description.value;

    delete holder.createdAt;
    delete holder.deletedAt;
    delete holder.updatedAt;

    if (edit.class === 'category') handleCategory();
    else handleIngredient();
  };

  const closeForm = () => {
    setEdit((prev) => {
      const holder = prev;
      holder.show.category = false;
      holder.show.ingredient = false;

      return { ...holder };
    });
  };

  return (
    <div className="form_container">
      <button
        title="discard form"
        name="cancel-btn"
        type="button"
        onClick={closeForm}
      >
        cancel
      </button>

      <form onSubmit={handleSubmit}>
        <h3>
          {edit.chosenOne?.name ? `Edit ${edit.class}` : `Create ${edit.class}`}
        </h3>
        <input
          className="drink_name"
          type="text"
          name="itemName"
          defaultValue={edit.chosenOne?.name}
          placeholder={`${edit?.class} name`}
          required
        />

        <textarea
          cols="30"
          rows="10"
          type="text"
          name="description"
          placeholder={`${edit.class} description`}
          defaultValue={edit.chosenOne?.description}
          required
        />

        <button type="submit" className="submit-item">
          save {edit?.class}
        </button>
      </form>
    </div>
  );
}
