/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

import { CrudContext, MyContext } from '../context/MyContext';
import FetchHOC from '../HOCs/FetchHOC';
import StyledNestedOverall from './StyledNestedOverall';

import { deleteCategory } from '../api/authentication';
import useDialogue from '../hooks/useDialogue';

function NestedCategories({ fetchedData }) {
  const { customAlert, setLoadingAnime, handleToggleModal } =
    React.useContext(MyContext);
  const { handleCreateNew, handleCatAndIngrEdit } =
    React.useContext(CrudContext);

  const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();

  const { Categories } = fetchedData;

  const handleDeleteCategory = ({ id }) => {
    const options = {
      message2: 'are you sure you want',
      message3: 'to delete this Category ?',
      agreeTxt: 'delete',
      async fxntoCall() {
        setLoadingAnime({ message: 'deleting...', show: true });
        await deleteCategory(id)
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

      <button
        className="create-new-btn"
        type="button"
        onClick={() => handleCreateNew('category')}
      >
        create New
      </button>

      <div className="container">
        {Categories?.map((category, ind, arrCategories) => (
          <div
            key={category.id}
            className="category"
            style={{ backgroundImage: `url("${category.image_url}")` }}
          >
            <h3 onClick={() => handleToggleModal(ind, arrCategories)}>
              {category.name}
            </h3>

            <div className="action-btns">
              <button
                name={category.id}
                className="edit_btn"
                type="button"
                onClick={() => handleCatAndIngrEdit('category', category)}
              >
                <TiEdit />
              </button>

              <button
                name={category.id}
                className="del_btn"
                type="button"
                onClick={() => handleDeleteCategory(category)}
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

export default FetchHOC(NestedCategories);
