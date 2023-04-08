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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 10px auto 0;
    padding: 0;

    .drink,
    .category,
    .ingredient {
      position: relative;
      border: 1px solid #a52a2a;
      padding: 10px;
      height: 300px;
      width: 100%;
      display: flex;
      flex-direction: column;
      cursor: default;
      z-index: 1;

      * {
        cursor: default;
      }

      .action-btns {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        display: flex;
        justify-content: space-between;
        width: 90%;
        max-width: 200px;
        margin: 2rem auto 14px;

        button {
          background-color: #a52a2a;
          color: #f5f5f5;
          font-weight: 600;
          padding: 5px 10px;
          font-size: 30px;
          cursor: pointer;
          border-radius: 17px;
          box-shadow: 0 0 10px #222;

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
