import styled from '@emotion/styled';

const StyledSideBar = styled.div`
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
          /* display: none; */
        }
      }
    }
  }
`;

export default StyledSideBar;
