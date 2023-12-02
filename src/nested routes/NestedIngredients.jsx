/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

import CrudContext from '../context/CrudContext';
import FetchHOC from '../HOCs/FetchHOC';
import StyledNestedOverall from './StyledNestedOverall';

import { deleteIngredient } from '../api/authentication';
import useDialogue from '../hooks/useDialogue';
import useLoader from '../hooks/useLoader';
import useModal from '../hooks/UseModal/useModal';
import { useAppContext } from '../context/AppContext';

function NestedIngredients({ fetchedData }) {
  const { customAlert } = useAppContext();
  const { handleCreateNew, handleCatAndIngrEdit } =
    React.useContext(CrudContext);

  const { LoadingComponent, setLoadingAnime, loadingAnime } = useLoader();

  const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();

  const { ModalComponent, itemModal, mountItemModal } = useModal();

  const { Ingredients } = fetchedData;

  const handleDeleteIngredient = async ({ id }) => {
    const options = {
      message2: 'are you sure you want',
      message3: 'to delete this Ingredient ?',
      agreeTxt: 'delete',
      async fxntoCall() {
        setLoadingAnime({ message: 'deleting...', show: true });
        await deleteIngredient(id)
          .then((res) => customAlert(res.data))
          .catch(({ response }) => customAlert(response.data))
          .finally(() => setLoadingAnime({ message: '', show: false }));
      },
    };

    displayDialogue(options);
  };

  return (
    <StyledNestedOverall>
      {dialogueDetails.show && <DialogueComponent />}
      {loadingAnime.show && <LoadingComponent />}
      {itemModal.show && <ModalComponent />}

      <button
        className="create-new-btn"
        type="button"
        onClick={() => handleCreateNew('ingredient')}
      >
        create New
      </button>

      <div className="container">
        {Ingredients?.map((ingredient, ind, arrIngredients) => (
          <div
            key={ingredient.id}
            className="ingredient"
            style={{ backgroundImage: `url("${ingredient.image_url}")` }}
          >
            <h3 onClick={() => mountItemModal(ind, arrIngredients)}>
              {ingredient.name}
            </h3>

            <div className="action-btns">
              <button
                name={ingredient.id}
                className="edit_btn"
                type="button"
                title="edit this ingredient"
                onClick={() => handleCatAndIngrEdit('ingredient', ingredient)}
              >
                <TiEdit />
              </button>

              <button
                name={ingredient.id}
                className="del_btn"
                type="button"
                title="delete this ingredient"
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
