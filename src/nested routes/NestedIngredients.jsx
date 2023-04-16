/* eslint-disable react/prop-types */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

import { CrudContext, MyContext } from '../context/MyContext';
import FetchHOC from '../HOCs/FetchHOC';
import StyledNestedOverall from '../styles/StyledNestedOverall';

import { deleteIngredient } from '../api/authentication';

function NestedIngredients({ fetchedData }) {
  const {
    customAlert,
    setLoadingAnime,
    setdialogueDetails /* setItemModal */,
  } = React.useContext(MyContext);
  const { handleCreateNew, handleCatAndIngrEdit } =
    React.useContext(CrudContext);

  const { Ingredients } = fetchedData;

  const handleDeleteIngredient = async ({ id }) => {
    await setdialogueDetails({
      message1: '',
      message2: 'are you sure you want',
      message3: 'to delete this Ingredient ?',
      show: true,
      job: 'delete',
      async fxntoCall() {
        setLoadingAnime({ message: 'deleting...', show: true });
        await deleteIngredient(id)
          .then((res) => customAlert(res.data))
          .catch(({ response }) => customAlert(response.data))
          .finally(() => setLoadingAnime({ message: '', show: false }));
      },
    });
  };

  return (
    <StyledNestedOverall>
      <button
        className="create-new-btn"
        type="button"
        onClick={() => handleCreateNew('ingredient')}
      >
        create New
      </button>

      <div className="container">
        {Ingredients?.map((ingredient) => (
          <div
            key={ingredient.id}
            className="ingredient"
            style={{ backgroundImage: `url("${ingredient.image_url}")` }}
          >
            <div
              style={{ backgroundImage: `url("${ingredient.image_url}")` }}
            />

            <h3>{ingredient.name}</h3>
            {/* <p>{ingredient.description}</p> */}

            <div className="action-btns">
              <button
                name={ingredient.id}
                className="edit_btn"
                type="button"
                onClick={() => handleCatAndIngrEdit('ingredient', ingredient)}
              >
                <TiEdit />
              </button>

              <button
                name={ingredient.id}
                className="del_btn"
                type="button"
                onClick={() => handleDeleteIngredient(ingredient)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        ))}
      </div>
    </StyledNestedOverall>
  );
}

export default FetchHOC(NestedIngredients);
