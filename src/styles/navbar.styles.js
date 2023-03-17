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
    justify-content: space-between;
    padding: 0 1rem;
    transition: 0.6s color;

    .left_group {
      width: fit-content;
      height: fit-content;
      margin: 0;
      display: flex;
      align-items: center;

      .side_menu_btn {
        background-color: green;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 3px;
        padding: 12px 1rem;
        margin: 0 1rem 0 0;
      }

      .user_status {
        width: fit-content;
        height: fit-content;
        color: #f5f5f5;
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0 0 0 4rem;

        span {
          color: #a52a2a;
          font-size: 2rem;
          font-weight: 700;
        }
      }
    }

    .profile_section {
      position: relative;
      height: fit-content;
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 1rem;
      padding: 0;
      cursor: pointer;

      .profile_logo {
        background-color: #f5f5f5;
        background-position: center;
        background-size: cover;
        height: 60px;
        width: 60px;
        border-radius: 50px;
        margin: 5px 0 0;
      }

      span {
        color: #a52a2a;
        font-weight: 700;
        margin: 5px 0 2px;
      }
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
      overflow: auto;

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

          h2 {
            color: #a52a2a;
            font-size: 1.5rem;
            letter-spacing: 3px;
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
  }

  @media only screen and (max-width: 768px) {
    .navBar-container {
      .left_group {
        .side_menu_btn {
          font-size: 0.9rem;
          letter-spacing: 2px;
          padding: 8px 10px;
        }
      }

      .profile_section {
        margin: 0;
      }

      .menu-list {
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
  }

  @media only screen and (max-width: 600px) {
    .navBar-container {
      .left_group {
        margin: 0;

        .user_status {
          margin: 0 0 0 1rem;
        }
      }

      .profile_section {
        span {
          display: none;
        }
      }
    }
  }
`;

export default StyledNavBar;
