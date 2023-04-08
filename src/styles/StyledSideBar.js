import styled from '@emotion/styled';

const StyledSideBar = styled.div`
  width: 100%;

  .menu-list-overlay {
    background-color: #000;
    opacity: 0.05;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
  }

  .menu-list {
    background-color: #242526;
    box-shadow: 0 0 10px;
    display: flex;
    width: 100%;
    max-width: 500px;
    min-height: 100vh;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 40px 0;
    transition: 0.4s ease-in transform;
    z-index: 4;

    &.active-menu-list {
      transform: translate(0);
    }

    .result_count {
      color: #f5f5f5;
      width: 100%;
      height: fit-content;
      text-align: left;
      padding: 1rem;
      font-size: 17px;
      letter-spacing: 5px;
      font-weight: 700;
      cursor: default;

      span {
        color: #a52a2a;
        font-size: 1.4rem;
        letter-spacing: 0;
        cursor: pointer;
      }
    }

    .filter_btn {
      background-color: #a52a2a;
      color: #f5f5f5;
      font-weight: 700;
      padding: 10px 1.2rem;
      align-self: flex-end;
      margin: 10px 1rem;
    }

    form {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;

      label {
        display: flex;
        align-items: center;

        input {
          width: 20px;
          height: 20px;
          font-size: 1.2rem;
          padding: 10px;
          margin: 0 10px 0 0;
        }
      }

      li {
        width: 100%;
        height: fit-content;
        padding: 1rem 0;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-bottom: 1px solid grey;

        &:nth-last-of-type(1) {
          border-bottom: none;
        }

        h2 {
          color: #a52a2a;
          font-size: 1.5rem;
          letter-spacing: 3px;
          display: flex;
          flex-wrap: nowrap;
          align-items: flex-end;
          gap: 13px;
          cursor: pointer;
        }

        label {
          color: green;
          width: 100%;
          text-align: left;
          padding: 10px 15px;
          margin: 5px 0;
          cursor: pointer;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .menu-list {
      background: #18191a;
      position: fixed;
      padding: 55px 0 75px;
      top: 5.7rem;
      height: calc(100vh - 5.7rem);
      left: 0;
      transform: translate(${({ showSide }) => (showSide ? '0' : '-120%')});
      display: flex;
      width: 70vw;
      max-width: 500px;
      overflow-y: scroll;
      z-index: 4;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .result_count {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
      }

      form {
        width: calc(100% - 1rem);
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

export default StyledSideBar;
