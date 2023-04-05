/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import StyledDrinksForm from '../styles/StyledDrinksForm';
import closeIcon from '../images/close icon.png';
import { MyContext } from '../context/MyContext';
// import { postDrink } from '../api/authentication';

export default function DrinksForm(props) {
  const { drink, setEdit } = props;

  const { customAlert } = React.useContext(MyContext);
  const [drinkData, setDrinkData] = React.useState(drink?.chosenOne);

  const [imagePath, setImagePath] = React.useState();
  const formRef = React.useRef();

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

    setDrinkData((prev) => ({ ...prev, image_url: path }));
    setImagePath(path); // this is just to give the ui's background and hide the clear image btn

    e.target.value = '';
  };

  const handleSaveDrink = async () => {
    if (!(drinkData.recipe && drinkData.name)) {
      customAlert("you have'nt created a drink yet");
      return;
    }

    customAlert('createding drink...');

    // await postDrink(drinkData);
    console.log('handle post Drink \n', drinkData);
  };

  const handleSubmit = (e, saveDrink = false) => {
    if (!saveDrink) e.preventDefault();

    const { recipe, drinkName, description } = saveDrink ? e : e.target; // cant believe this worked

    if (!drinkData.recipe) {
      setDrinkData((prev) => ({
        ...prev,
        name: drinkName.value || '',
        recipe: [recipe.value] || [],
        description: description.value,
      }));
      e.target.recipe.value = '';

      if (saveDrink) {
        handleSaveDrink();
        e.recipe.value = ''; // note that e could either be from formRef.current ('which cannot be targeted by doing e.target....') || the form ('which is targeted by e.target....')
      }

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
    }));

    if (saveDrink) {
      handleSaveDrink();
      e.recipe.value = ''; // note that e could either be from formRef.current ('which cannot be targeted by doing e.target....') || the form ('which is targeted by e.target....')
      return;
    }

    e.target.recipe.value = ''; // value has refused to be assigned to directly, so i going back to using this longer one
  };

  return (
    <StyledDrinksForm>
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

        <form ref={formRef} onSubmit={handleSubmit}>
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
                accept="image/jpeg, image/png, image/jpg, image/svg"
                name="uploadedImage"
                className="image_input"
                placeholder="add an image"
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
            onClick={() => handleSubmit(formRef.current, true)} // the second parameter means, handleSubmit is allowed to call the saveDrink() function
          >
            save Drink
          </button>
        </form>
      </div>
    </StyledDrinksForm>
  );
}
