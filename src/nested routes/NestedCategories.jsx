import React from 'react';
import styled from '@emotion/styled';
import { CrudContext, MyContext } from '../context/MyContext';

import { deleteCategory } from '../api/authentication';

const StyledNestedCategories = styled.div`
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

export default function NestedCategories() {
  const { customAlert, setLoadingAnime, setdialogueDetails, fetchedData } =
    React.useContext(MyContext);
  const { edit, setEdit } = React.useContext(CrudContext);

  const { Categories, Drinks } = fetchedData;

  const bodyref = React.useRef();

  const handleDeleteCategory = async (id) => {
    await setdialogueDetails({
      message1: '',
      message2: 'are you sure you want',
      message3: 'to delete this drink ?',
      show: true,
      job: 'delete',
      async fxntoCall() {
        setLoadingAnime({ message: 'deleting...', show: true });
        await deleteCategory(id)
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

  const handleCategoryEdit = (id) => {
    const { log, clear } = console;
    const holder = edit;
    const [drinkToEdit] = Drinks.filter((drink) => drink.id === id);
    holder.drink.show = true;
    holder.drink.chosenOne = drinkToEdit;

    setEdit(() => ({ ...holder }));

    clear();
    log('clicked drink', id, drinkToEdit);
  };

  return (
    <StyledNestedCategories>
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
      <p>nested Categories</p>

      <div ref={bodyref} className="drinks-container">
        {Categories?.map((category) => (
          <div
            key={category.id}
            className="category"
            style={{ backgroundImage: `url("${category.image_url}")` }}
          >
            <div style={{ backgroundImage: `url("${category.image_url}")` }} />
            <h3>
              {category.name} {category.id}
            </h3>
            {/* <p>{category.description}</p> */}

            <div className="action-btns">
              <button
                name={category.id}
                type="button"
                onClick={(e) => handleDeleteCategory(+e.target.name)}
              >
                del
              </button>

              <button
                name={category.id}
                type="button"
                onClick={(e) => handleCategoryEdit(+e.target.name)}
              >
                edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </StyledNestedCategories>
  );
}
