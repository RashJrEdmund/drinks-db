/* eslint-disable react/prop-types */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

import simulationData from '../data/DataSimulation.json';
import DrinksForm from '../components/DrinksForm';
import { CrudContext, MyContext } from '../context/MyContext';

import { deleteDrink } from '../api/authentication';
import StlydeNestedOverall from '../styles/StyledNestedOverall';

export default function NestedDrinks({ currentUser }) {
  // const localDrinks = JSON.parse(localStorage.getItem('localDrinks'));
  const { customAlert, setLoadingAnime, setdialogueDetails } =
    React.useContext(MyContext);
  const { edit, setEdit } = React.useContext(CrudContext);
  const bodyref = React.useRef();

  const { Drinks } = simulationData;

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
    holder.drink.chosenOne = drinkToEdit;
    holder.drink.chosenOne.userId = currentUser?.id;

    setEdit(() => ({ ...holder }));

    log('clicked drink', id, drinkToEdit);
  };

  return (
    <StlydeNestedOverall>
      {edit.drink.show && <DrinksForm drink={edit?.drink} setEdit={setEdit} />}

      <button
        className="create-new-btn"
        type="button"
        onClick={() =>
          setEdit({
            drink: {
              chosenOne: {},
              show: true,
            },
            category: {
              chosenOne: {},
              show: false,
            },
            ingredient: {
              chosenOne: {},
              show: false,
            },
          })
        }
      >
        create New
      </button>

      <div ref={bodyref} className="container">
        {Drinks?.map((drink) => (
          <div
            key={drink.id}
            className="drink"
            style={{ backgroundImage: `url("${drink.image_url}")` }}
          >
            <div style={{ backgroundImage: `url("${drink.image_url}")` }} />
            <h3>
              {drink.name} {drink.id}
            </h3>
            {/* <p>{drink.description}</p> */}

            <div className="action-btns">
              <button
                name={drink.id}
                className="del_btn"
                type="button"
                onClick={() => handleDeleteDrink(drink.id)}
              >
                <MdDeleteForever />
              </button>

              <button
                name={drink.id}
                className="edit_btn"
                type="button"
                onClick={() => handleDrinkEdit(drink.id)}
              >
                <TiEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </StlydeNestedOverall>
  );
}
