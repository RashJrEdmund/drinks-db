/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit, TiLockClosed, TiLockOpen } from 'react-icons/ti';

import DrinksForm from '../components/drinksForm/DrinksForm';
import CrudContext from '../context/CrudContext';

import { deleteDrink } from '../api/authentication';
import StyledNestedOverall from './StyledNestedOverall';
import FetchHOC from '../HOCs/FetchHOC';
import useDialogue from '../hooks/useDialogue';
import useLoader from '../hooks/useLoader';
import useModal from '../hooks/UseModal/useModal';
import { useAppContext } from '../context/AppContext';

function NestedDrinks({ fetchedData }) {
  const { customAlert } = useAppContext();

  const { Drinks } = fetchedData;

  const { edit, setEdit, currentUser, handleCreateNew } =
    React.useContext(CrudContext);

  const { LoadingComponent, setLoadingAnime, loadingAnime } = useLoader();

  const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();

  const { ModalComponent, itemModal, mountItemModal } = useModal();

  const handleDrinkEdit = (drink) => {
    const holder = edit;

    drink.userId = currentUser.id;

    holder.show.drink = true;
    holder.type = 'edit';
    holder.chosenOne = drink;

    setEdit(() => ({ ...holder }));
  };

  const handleDeleteDrink = async (drink) => {
    if (drink.userId !== currentUser.id) {
      customAlert("you can only modify another user's drink");
      return;
    }

    const options = {
      message2: 'are you sure you want',
      message3: 'to delete this drink ?',
      agreeTxt: 'delete',
      async fxntoCall() {
        setLoadingAnime({ message: 'deleting...', show: true });
        await deleteDrink(drink.id)
          .then((res) => customAlert(res.data))
          .catch(({ response }) => customAlert(response.data))
          .finally(() => setLoadingAnime({ message: '', show: false }));
      },
    };

    displayDialogue(options);
  };

  return (
    <StyledNestedOverall>
      {edit.show.drink && <DrinksForm drink={edit} setEdit={setEdit} />}
      {dialogueDetails.show && <DialogueComponent />}
      {loadingAnime.show && <LoadingComponent />}
      {itemModal.show && <ModalComponent />}

      <button
        className="create-new-btn"
        type="button"
        onClick={() => handleCreateNew('drink')}
      >
        create New
      </button>

      <div className="container">
        {[
          ...Drinks.filter((drink) => drink.userId === currentUser.id),
          ...Drinks.filter((drink) => drink.userId !== currentUser.id),
        ]?.map((drink, ind, arrDrinks) => (
          <div key={drink.id} className="drink">
            <div
              className="image"
              title="tap to view"
              style={{ backgroundImage: `url("${drink.image_url}")` }}
              onClick={() => mountItemModal(ind, arrDrinks)}
            >
              {drink.userId === currentUser.id ? (
                <TiLockOpen
                  className="open_lock"
                  title="you created this drink"
                />
              ) : (
                <TiLockClosed
                  className="closed_lock"
                  title="you can only modify another user's drink"
                />
              )}
            </div>

            <h3 onClick={() => mountItemModal(ind, arrDrinks)}>{drink.name}</h3>

            <div className="action-btns">
              <button
                name={drink.id}
                className="edit_btn"
                type="button"
                title="edit this drink"
                onClick={() => handleDrinkEdit(drink)}
              >
                <TiEdit />
              </button>

              <button
                name={drink.id}
                className="del_btn"
                type="button"
                title="delete this drink"
                onClick={() => handleDeleteDrink(drink)}
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

export default FetchHOC(NestedDrinks);
