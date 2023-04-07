import styled from '@emotion/styled';

const StyledDrinksSection = styled.div`
  background-color: #242526;
  margin: 0;
  padding: 0 0 2rem;
  width: 100%;
  height: fit-content;
  min-height: 120vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px;

  .navigation_btns {
    width: fit-content;
    max-width: 97%;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 1rem auto;

    span {
      height: fit-content;
      width: fit-content;
      padding: 0;
      margin: 0 5px;
      font-size: 2rem;
      cursor: pointer;

      button {
        background: #000;
        color: #cee;
        padding: 7px 9px;
        margin: 0;
        font-weight: 600;

        &:hover {
          background-color: #cee;
          color: #a52a2a;
        }

        &.active_dot {
          border: 1px solid #cee;
          color: #a52a2a;

          &:hover {
            background: none;
            color: #cee;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    box-shadow: unset;
  }
`;

export default StyledDrinksSection;
