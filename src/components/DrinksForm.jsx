/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from '@emotion/styled';
import closeIcon from '../images/close icon.png';
import { MyContext } from '../context/MyContext';
import { postDrink } from '../api/authentication';

const StyledDrinksFrom = styled.div`
  .drink_form_overlay {
    position: fixed;
    background-color: #00000086;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
  }

  @keyframes formAnime {
    from {
      top: -50%;
    }
    to {
      top: 50%;
    }
  }

  .form_container {
    animation: formAnime;
    animation-duration: 0.6s;

    position: fixed;
    background-color: #000000e2;
    top: 50%;
    left: 50%;
    width: 97vw;
    max-width: 650px;
    height: fit-content;
    max-height: 97vh;
    overflow: auto;
    transform: translate(-50%, -50%);
    z-index: 4;

    display: flex;
    flex-direction: column;
    padding: 1rem 10px 2rem;

    [name='cancel-btn'] {
      background: none;
      color: #a52a2a;
      font-weight: 600;
      font-size: 1.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin: 1rem 0 0;

      h3 {
        width: 100%;
        color: #f5f5f5;
        cursor: default;
      }

      .drink_name {
        background: none;
        color: #f5f5f5;
        border: none;
        border-bottom: 1px solid #f5f5f5;
        height: 35px;
        width: 100%;
        padding: 10px 0;
        font-size: 1.1rem;
        text-align: center;
        margin: 10px 0;
      }

      .swipe_to_see_img {
        justify-self: right;
        text-align: right;
        width: 100%;
        color: #f5f5f5;

        &::after {
          content: ' ->';
        }
      }

      .text_area_and_image {
        width: 100%;
        height: fit-content;
        min-height: 260px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin: 7px 0;
        padding: 10px 0;
        overflow: auto;

        textarea {
          height: fit-content;
          min-height: 240px;

          min-width: 100%;
          padding: 10px;
          margin: 0;
          line-height: 20px;
        }

        .image-div {
          position: relative;

          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          min-width: 100%;
          height: 250px;
          cursor: pointer;

          &.active-image-div {
            /* transform: scale(2.5); */
          }

          .image_input {
            background: none;
            border: none;
            width: 87px;
            position: absolute;
            left: 10%;
            bottom: 0;
            margin: 10px;
          }

          .clear_img_btn {
            background: #0000006e;
            color: #f5f5f5;
            font-weight: 600;
            position: absolute;
            right: 10%;
            bottom: 0;
            margin: 10px;
          }
        }
      }

      span {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        gap: 10px;

        input {
          height: 35px;
          width: 100%;
          padding: 10px;
        }

        .add_recipe_btn {
          background: none;
          min-width: 40px;
          color: #f5f5f5;
          font-weight: 1000;
          padding: 0;
          font-size: 2.5rem;
        }
      }

      .recipe-option {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin: 7px 0;

        p {
          color: #f5f5f5;
          text-align: left;
          height: fit-content;
          width: 100%;
          padding: 10px;
          word-wrap: break-word;
          word-break: normal;
          cursor: default;
        }

        img {
          background-color: #a52a2a;
          width: 30px;
          height: 30px;
          border-radius: 100px;
          cursor: pointer;
        }
      }

      .submit-drink-btn {
        background-color: #a52a2a;
        color: #f5f5f5;
        margin: 1rem auto 0;
        width: 100%;
        padding: 10px 0;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .image-div {
      .image_input {
        left: 0;
      }

      .clear_img_btn {
        right: 0;
      }
    }
  }
`;

export default function DrinksForm(props) {
  const { drink, setEdit } = props;

  const { customAlert } = React.useContext(MyContext);
  const [drinkData, setDrinkData] = React.useState(drink?.chosenOne);
  const [imagePath, setImagePath] = React.useState();

  const closeForm = () => {
    setEdit((prev) => {
      const holder = prev;
      holder.drink.show = false;
      return { ...holder };
    });
  };

  const deleteRecipe = (e) => {
    const { name } = e.target;
    const newRecipeList = drinkData.recipe.filter((item) => item !== name);
    setDrinkData((prev) => ({
      ...prev,
      recipe: newRecipeList,
    }));
  };

  const handleUploadImage = async (e) => {
    const path = URL.createObjectURL(e.target.files[0]);
    setImagePath(path);
    e.target.value = '';
    console.log('thies imagepath', imagePath);
  };

  const updateDrinkInfo = (e) => {
    e.preventDefault();
    const { recipe, drinkName, description } = e.target; // cant believe this worked

    const imgPathHolder = imagePath;
    console.log('this image \n', imgPathHolder);

    if (!drinkData.recipe) {
      setDrinkData((prev) => ({
        name: drinkName.value || '',
        recipe: [recipe.value] || [],
        description: description.value,
        image_url: imgPathHolder || prev.image_url || '',
      }));
      e.target.recipe.value = '';

      return;
    }

    const newRecipeList = recipe.value
      ? [...drinkData.recipe, recipe.value]
      : [...drinkData.recipe];

    setDrinkData((prev) => ({
      ...prev,
      name: prev.name === drinkName.value ? prev.name : drinkName.value,
      recipe: newRecipeList,
      description: description.value,
      image_url: imgPathHolder || prev.image_url,
    }));

    e.target.recipe.value = ''; // value has refused to be assigned to directly, so i going back to using this longer one
  };

  const handleSaveDrink = async () => {
    if (!(drinkData.recipe && drinkData.name)) {
      customAlert("you have'nt created a drink yet");
      return;
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // await postDrink({ ...drinkData, userId: currentUser.id });
    console.log('handle post Drink', currentUser.id, '\n', drinkData);
  };

  return (
    <StyledDrinksFrom>
      <div className="drink_form_overlay" onClick={closeForm} />

      <div className="form_container">
        <button
          title="discard form"
          name="cancel-btn"
          type="button"
          onClick={closeForm}
        >
          cancel
        </button>

        <form onSubmit={updateDrinkInfo}>
          <h3>{drinkData?.name ? 'Edit Drink' : 'Create Drink'}</h3>
          <input
            className="drink_name"
            type="text"
            name="drinkName"
            defaultValue={drinkData?.name}
            placeholder="name drink"
            required
          />

          <p className="swipe_to_see_img">swipe to see image</p>

          <div className="text_area_and_image">
            <textarea
              cols="30"
              rows="10"
              type="text"
              name="description"
              placeholder="drink description"
              defaultValue={drinkData?.description}
              required
            />

            <div
              className="image-div active-image-div"
              style={{
                backgroundImage: `URL(${imagePath || drinkData?.image_url})`,
              }}
            >
              <input
                type="file"
                name="uploadedImage"
                className="image_input"
                placeholder="add an image"
                accept="image/jpeg, image/png, image/jpg, image/svg"
                onChange={handleUploadImage}
              />
              {imagePath && (
                <button
                  className="clear_img_btn"
                  type="button"
                  onClick={() => setImagePath(null)}
                >
                  clear Image
                </button>
              )}
            </div>
          </div>

          <span>
            <input type="text" name="recipe" placeholder="add to recipe" />
            <button className="add_recipe_btn" type="submit">
              +
            </button>
          </span>

          {drinkData?.recipe?.map((peice, ind) => (
            <div key={[peice, ind]} className="recipe-option">
              <p>{peice}</p>
              <img
                title="delete step ?"
                src={closeIcon}
                name={peice}
                alt="close_icon_image"
                onClick={deleteRecipe}
              />
            </div>
          ))}

          <button
            type="button"
            className="submit-drink-btn"
            onClick={handleSaveDrink}
          >
            save Drink
          </button>
        </form>
      </div>
    </StyledDrinksFrom>
  );
}
