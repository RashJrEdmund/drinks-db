import styled from '@emotion/styled';

const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: none;
  width: 100%;
  height: fit-content;
  z-index: 5;

  .navBar-container {
    position: relative;
    background-color: #ffd901;
    background: linear-gradient(to bottom, #00000065, #00000065, #00000065);
    width: 100%;
    min-height: 90px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    transition: 0.6s color;

    a {
      margin: 0 1rem 0 0;
      width: fit-content;
      height: fit-content;

      h1 {
        color: whitesmoke;
        width: fit-content;
        height: fit-content;
        letter-spacing: 5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s color;

        &:hover {
          color: #a52a2a;
        }
      }
    }

    .menu-btns {
      margin: 0 2rem;
      display: flex;
      align-items: center;
      width: fit-content;
      height: fit-content;

      .category-btn {
        background-color: green;
        font-weight: 700;
        font-size: 1rem;
        padding: 12px 1rem;
        margin: 0;
      }

      .menu-list {
        background: linear-gradient(to bottom, #00000065, #000000be, #000);
        position: absolute;
        top: 100%;
        left: 0;
        transform: translate(-120%);
        display: flex;
        width: 60vw;
        max-width: 500px;
        height: calc(100vh - 90px);
        flex-direction: column;
        align-items: center;
        list-style: none;
        padding: 50px 0 0;
        transition: 0.4s ease-in transform;
        /* z-index: 1; */

        &.active-menu-list {
          transform: translate(0);
        }

        form {
          width: calc(100% - 1rem);
          height: fit-content;
          display: flex;
          align-items: center;
          margin: 0 0 1rem 1rem;

          input {
            height: 50px;
            font-size: 1.2rem;
            padding: 10px;
            margin: 0;
          }

          button {
            padding: 15px;
            font-weight: 700;
            font-size: 1rem;
          }
        }

        li {
          color: #a52a2a;
          width: 100%;
          height: fit-content;
          text-align: left;
          padding: 1rem;
          font-size: 1.5rem;
          letter-spacing: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.7s;

          &:hover {
            background: linear-gradient(
              to bottom,
              #00000065,
              #00000065,
              #00000065
            );
            color: #fff;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .navBar-container {
      a {
        h1 {
          &:hover {
            color: whitesmoke;
          }
        }
      }

      .menu-btns {
        .menu-list {
          form {
            width: calc(100% - 1rem);
            flex-direction: column;
            align-items: flex-start;

            input {
              width: 95%;
              height: 35px;
              padding: 10px;
            }

            button {
              padding: 5px;
              margin: 10px 0px;
            }
          }

          li {
            &:hover {
              background: unset;
              color: #a52a2a;
            }
          }
        }
      }
    }
  }
`;

export default StyledNavBar;
