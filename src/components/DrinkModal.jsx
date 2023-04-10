/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const StyledItemModal = styled.div`
  .item_modal_overlay {
    background-color: #00000099;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 4;
  }

  .item_modal_holder {
    background: #000;
    padding: 14px 0;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 97vw;
    max-width: 700px;
    height: fit-content;
    min-height: 400px;
    transform: translate(-50%, -50%);
    z-index: 6;
    display: flex;
    align-items: center;

    button {
      position: relative;
      background: none;
      font-size: 10px;
      transform: scale(8);
      color: #a52a2a;

      &.backward_btn {
        left: -40px;
      }

      &.forward_btn {
        right: -40px;
      }
    }

    .item_container {
      color: #f5f5f5;
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      gap: 4px;

      .image_div {
        min-height: 300px;
        min-width: 300px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      .info_div {
        width: 100%;
        margin: 0 5px;

        h3 {
          margin: 0 0 10px;
        }

        p {
          line-height: 25px;
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    // write querry for 900px screen size
  }
`;

export default function DrinkModal({ itemModal, setItemModal }) {
  const { items, start } = itemModal;

  const [ind, setind] = React.useState(start);

  const handleMotion = (direction) => {
    const end = items.length;
    if (direction === 'forward') {
      setind((prev) => Math.floor((prev + 1) % end));
    } else {
      setind((prev) => (ind <= 0 ? items.length - 1 : prev - 1));
    }
  };

  return (
    <StyledItemModal>
      <div
        className="item_modal_overlay"
        onClick={() => setItemModal((prev) => ({ ...prev, show: false }))}
      />

      <div className="item_modal_holder">
        <button type="button" className="backward_btn" onClick={handleMotion}>
          <MdKeyboardArrowLeft />
        </button>

        <div className="item_container">
          <div
            className="image_div"
            style={{ backgroundImage: `url(${items[ind]?.image_url})` }}
          />

          <div className="info_div">
            <h3>
              {items[ind]?.name} {ind}
            </h3>

            <p>{items[ind]?.description}</p>
          </div>
        </div>

        <button
          type="button"
          name="forward"
          className="forward_btn"
          onClick={() => handleMotion('forward')}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </StyledItemModal>
  );
}
