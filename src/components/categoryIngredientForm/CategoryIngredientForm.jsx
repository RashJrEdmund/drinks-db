/* eslint-disable react/prop-types */
import React from 'react';
import { MyContext } from '../../context/MyContext';

import StyledCategoryIngredientForm from './StyledCategoryIngredientForm';

import {
  postCategory,
  patchCategory,
  postIngredient,
  patchIngredient,
} from '../../api/authentication';
import useLoader from '../../hooks/useLoader';

export default function CategoryIngredientFrom(props) {
  const { edit, setEdit } = props;

  const { customAlert } = React.useContext(MyContext);

  const { LoadingComponent, setLoadingAnime, loadingAnime } = useLoader();

  const closeForm = () => {
    setEdit((prev) => {
      const holder = prev;
      holder.show.category = false;
      holder.show.ingredient = false;

      return { ...holder };
    });
  };

  const terminatePromiseChain = () => {
    setLoadingAnime({ messagee: '', show: false });
  };

  const handleCategory = async (category) => {
    if (edit.type === 'create') {
      await postCategory(category)
        .then(() => customAlert('category saved'))
        .catch(() => customAlert('could not create category'))
        .finally(() => terminatePromiseChain());
    } else {
      await patchCategory(category)
        .then(() => customAlert('category saved'))
        .catch(() => customAlert('could not saved category'))
        .finally(() => terminatePromiseChain());
    }
  };

  const handleIngredient = async (ingredient) => {
    if (edit.type === 'create') {
      await postIngredient(ingredient)
        .then(() => customAlert('ingredient saved'))
        .catch(() => customAlert('could not create ingredient'))
        .finally(() => terminatePromiseChain());
    } else {
      await patchIngredient(ingredient)
        .then(() => customAlert('ingredient saved'))
        .catch(() => customAlert('could not saved ingredient'))
        .finally(() => terminatePromiseChain());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingAnime({
      message: `${edit.type === 'create' ? 'creating' : 'saving'}...`,
      show: true,
    });

    const { itemName, description } = e.target;

    const holder = edit?.chosenOne;
    holder.name = itemName.value;
    holder.description = description.value;

    delete holder.createdAt;
    delete holder.deletedAt;
    delete holder.updatedAt;

    closeForm();

    if (edit.class === 'category') handleCategory(holder);
    else handleIngredient(holder);
  };

  return (
    <StyledCategoryIngredientForm>
      {loadingAnime.show && <LoadingComponent />}

      <div className="item_form_overlay" />

      <div className="form_container">
        <button
          title="discard form"
          name="cancel-btn"
          type="button"
          onClick={closeForm}
        >
          Discard
        </button>

        <form onSubmit={handleSubmit}>
          <h3>
            {edit.chosenOne?.name
              ? `Edit ${edit.class}`
              : `Create ${edit.class}`}
          </h3>
          <input
            className="item_name"
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
    </StyledCategoryIngredientForm>
  );
}
