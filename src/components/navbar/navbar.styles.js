import styled from '@emotion/styled';

const StyledNavBar = styled.div`
  background-color: #18191a;
  border-bottom: 1px solid #cce;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  transition: 0.4s transform;
  z-index: 5;

  &.active_navBar {
    transform: translateY(-100%);

    .side_menu_btn {
      transform: translate(-125%);
    }
  }

  .navBar-container {
    position: relative;
    background: none;
    width: 100%;
    min-height: 90px;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    margin: 0 auto;
    transition: 0.6s color;

    .side_menu_btn {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: green;
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 3px;
      padding: 12px 1rem;
      margin: 7px 10px;
      transition: 0.4s transform;
    }

    .left_group {
      width: fit-content;
      height: fit-content;
      margin: 0;
      display: flex;
      align-items: center;

      .drinks_db {
        width: fit-content;
        color: #a52a2a;
        font-size: 1.4rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 7px;
      }

      .user_status {
        width: fit-content;
        height: fit-content;
        color: #f5f5f5;
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0 0 0 4rem;

        .break {
          display: none;
        }

        span {
          color: #a52a2a;
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
    }

    // .profile_section {
    //   height: fit-content;
    //   width: fit-content;
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   padding: 0;
    //   cursor: pointer;

    //   .profile_logo {
    //     position: relative;
    //     background-color: #f5f5f5;
    //     background-position: center;
    //     background-size: cover;
    //     height: 60px;
    //     width: 60px;
    //     border-radius: 50px;
    //     margin: 5px 0 0;
    //   }

    //   span {
    //     color: #a52a2a;
    //     font-weight: 700;
    //     margin: 5px 0 2px;
    //   }
    // }

    .profile_section {
      height: fit-content;
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      cursor: pointer;

      &:focus {
        border: none;
        outline: none;
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .profile_logo {
        position: relative;
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
  }

  @media only screen and (max-width: 768px) {
    .navBar-container {
      .side_menu_btn {
        font-size: 0.9rem;
        letter-spacing: 2px;
        padding: 8px 10px;
      }

      .side_menu_btn {
        background-color: green;
        display: flex;
        align-items: center;
        gap: 4px;
        z-index: 4;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 3px;
        padding: 10px;
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

  @media only screen and (max-width: 400px) {
    .navBar-container {
      .left_group {
        .drinks_db {
          font-size: 1.3rem;
          font-weight: 600;
        }

        .user_status {
          font-size: 1rem;

          span {
            font-size: 1.2rem;
          }

          .break {
            display: unset;
          }
        }
      }
    }
  }
`;

export default StyledNavBar;
