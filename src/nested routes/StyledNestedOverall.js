import styled from '@emotion/styled';

const StyledNestedOverall = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .create-new-btn {
    margin: 10px 0 1rem;
    padding: 10px;
    box-shadow: 0 0 10px #a52a2a;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 10px auto 0;
    padding: 0;

    .drink,
    .category,
    .ingredient {
      position: relative;
      border-right: 1px solid #a52a2a;
      border-bottom: 1px solid #a52a2a;
      color: #000;
      padding: 10px;
      width: 100%;
      height: fit-content;
      min-height: 110px;
      display: flex;
      align-items: center;
      transition: 0.5s;

      &:hover {
        background: #a52a2aff;
        transform: translate(7px, -7px);
        box-shadow: 0 0 10px #222;

        .image {
          .closed_lock,
          .open_lock {
            background-color: #222;
          }
        }
      }

      .image {
        position: relative;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 90px;
        width: 90px;
        border-radius: 5px;
        border: 1px solid grey;
        margin: 0 2rem 0 0;
        cursor: pointer;
        font-size: 17px;

        .closed_lock {
          color: #a52a2a;
          position: absolute;
          right: 0;
          top: 0;
          transform: translate(20px);
        }

        .open_lock {
          color: #080;
          position: absolute;
          right: 0;
          top: 0;
          transform: translate(20px);
        }
      }

      h3 {
        width: fit-content;
        max-width: calc(100% - 275px);
        text-align: left;
        word-wrap: break-word;
        cursor: pointer;
      }

      .action-btns {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        width: 140px;

        button {
          color: #f5f5f5;
          color: #a52a2a;
          font-weight: 600;
          padding: 5px 10px;
          font-size: 30px;
          cursor: pointer;
          border-radius: 17px;
          box-shadow: 0 0 10px #222;

          & * {
            cursor: pointer;
          }

          &.edit_btn {
            color: #000;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .container {
      .drink,
      .category,
      .ingredient {
        border: 1px solid #a52a2a;

        &:hover {
          background: none;
          color: #000;
          transform: unset;
          box-shadow: none;

          .image {
            .closed_lock,
            .open_lock {
              background: none;
            }
          }
        }

        .image {
          margin: 0 1rem 0 0;
        }

        h3 {
          width: fit-content;
          max-width: calc(100% - 170px);
        }

        .action-btns {
          flex-direction: column;
          height: 100%;
          width: fit-content;
          padding: 5px 0;

          button {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export default StyledNestedOverall;
