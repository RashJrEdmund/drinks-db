import styled from '@emotion/styled';

const StlydeNestedOverall = styled.div`
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
      border: 1px solid #a52a2a;
      padding: 10px;
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      transition: 0.5s;

      &:hover {
        background: steelblue;
        transform: translate(7px, -7px);
        box-shadow: 0 0 10px #222;
      }

      .image {
        background-position: center;
        background-size: contain;
        height: 70px;
        width: 70px;
        border-radius: 5px;
        margin: 0 2rem 0 0;
      }

      .action-btns {
        position: absolute;
        right: 10px;
        display: flex;
        justify-content: space-between;
        width: 160px;

        button {
          background-color: #a52a2a;
          color: #f5f5f5;
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
            background-color: green;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;

export default StlydeNestedOverall;
