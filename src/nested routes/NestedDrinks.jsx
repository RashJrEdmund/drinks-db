/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

import DrinksForm from '../components/DrinksForm';
import { CrudContext, MyContext } from '../context/MyContext';

import { deleteDrink } from '../api/authentication';
import StlydeNestedOverall from '../styles/StyledNestedOverall';
import FetchHOC from '../HOFs/FetchHOC';

function NestedDrinks({ fetchedData }) {
  const { customAlert, setLoadingAnime, setdialogueDetails, setItemModal } =
    React.useContext(MyContext);

  const { Drinks } = fetchedData;

  const { edit, setEdit, currentUser } = React.useContext(CrudContext);
  const bodyref = React.useRef();

  const handleToggleModal = (id) =>
    setItemModal({ items: Drinks, show: true, start: +id });

  const handleCreateNew = () =>
    setEdit({
      drink: {
        chosenOne: {
          userId: currentUser.id,
        },
        show: true,
        type: 'create',
      },
      category: {
        chosenOne: {},
        show: false,
        type: '',
      },
      ingredient: {
        chosenOne: {},
        show: false,
        type: '',
      },
    });

  const handleDeleteDrink = async (id) => {
    await setdialogueDetails({
      message1: '',
      message2: 'are you sure you want',
      message3: 'to delete this drink ?',
      show: true,
      job: 'delete',
      async fxntoCall() {
        setLoadingAnime({ message: 'deleting...', show: true });
        await deleteDrink(id)
          .then((res) => {
            customAlert(res.data);
          })
          .catch(({ response }) => {
            customAlert(response.data);
          })
          .finally(() => setLoadingAnime({ message: '', show: false }));
      },
    });
  };

  const handleDrinkEdit = (id) => {
    const { log, clear } = console;
    clear();
    log('clicked', id, currentUser);
    const holder = edit;
    const [drinkToEdit] = Drinks.filter((drink) => drink.id === id);

    holder.drink.show = true;
    holder.drink.type = 'edit';
    holder.drink.chosenOne = drinkToEdit;
    holder.drink.chosenOne.userId = currentUser.id;

    setEdit(() => ({ ...holder }));

    log('clicked drink', id, drinkToEdit);
  };

  return (
    <StlydeNestedOverall>
      {edit.drink.show && <DrinksForm drink={edit?.drink} setEdit={setEdit} />}

      <button
        className="create-new-btn"
        type="button"
        onClick={handleCreateNew}
      >
        create New
      </button>

      <div ref={bodyref} className="container">
        {Drinks?.map((drink, ind) => (
          <div key={drink.id} className="drink">
            <div
              className="image"
              title="tap to view"
              style={{ backgroundImage: `url("${drink.image_url}")` }}
              onClick={() => handleToggleModal(ind)}
            />

            <h3 onClick={() => handleToggleModal(ind)}>
              {drink.name} {drink.id}
            </h3>
            {/* <p>{drink.description}</p> */}

            <div className="action-btns">
              <button
                name={drink.id}
                className="edit_btn"
                type="button"
                onClick={() => handleDrinkEdit(drink.id)}
              >
                <TiEdit />
              </button>

              <button
                name={drink.id}
                className="del_btn"
                type="button"
                onClick={() => handleDeleteDrink(drink.id)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        ))}
      </div>
    </StlydeNestedOverall>
  );
}

export default FetchHOC(NestedDrinks);
