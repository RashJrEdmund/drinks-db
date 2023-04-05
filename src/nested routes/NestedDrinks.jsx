/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import simulationData from '../data/DataSimulation.json';
import DrinksForm from '../components/DrinksForm';
import { CrudContext, MyContext } from '../context/MyContext';

import { deleteDrink } from '../api/authentication';

const StlydeNestedDrinks = styled.div`
  display: flex;
  flex-direction: column;

  .create-new-btn {
    margin: 0 0 1rem;
    padding: 10px;
    box-shadow: 0 0 10px #a52a2a;
  }

  .drinks-container {
    width: 97vw;
    max-width: 1224px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 10px auto 0;
    padding: 0 0 4rem;

    .drink {
      border: 1px solid #a52a2a;
      padding: 10px;
      height: 300px;
      width: 100%;
      /* border-radius: 10px; */
      cursor: default;

      * {
        cursor: default;
      }

      .action-btns {
        display: flex;
        justify-content: space-between;
        width: 60%;
        max-width: 200px;
        margin: 2rem auto 0;

        button {
          background-color: #a52a2a;
          color: #f5f5f5;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .drinks-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 500px) {
    .drinks-container {
      grid-template-columns: 1fr;
    }
  }
`;

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
    const holder = edit;
    const [drinkToEdit] = Drinks.filter((drink) => drink.id === id);

    holder.drink.show = true;
    holder.drink.chosenOne = drinkToEdit;
    holder.drink.chosenOne.userId = currentUser.id;

    setEdit(() => ({ ...holder }));

    clear();
    log('clicked drink', id, drinkToEdit);
  };

  return (
    <StlydeNestedDrinks>
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

      <div ref={bodyref} className="drinks-container">
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
                type="button"
                onClick={(e) => handleDeleteDrink(+e.target.name)}
              >
                del
              </button>

              <button
                name={drink.id}
                type="button"
                onClick={(e) => handleDrinkEdit(+e.target.name)}
              >
                edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </StlydeNestedDrinks>
  );
}
