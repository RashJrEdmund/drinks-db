import styled from '@emotion/styled';

const StyledAdminNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 1rem 0;
  width: 100%;
  height: fit-content;
  transition: 400ms;

  .admin_nav {
    position: relative;
    width: 97.5vw;
    max-width: 1400px;
    height: fit-content;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: left;
    gap: 20px;
    margin: 0 auto;

    button {
      background-color: #a52a2a;
      font-weight: 600;
      color: #f5f5f5;
      padding: 7px 10px;
      box-shadow: 0 0 10px #222;
      margin: 0;

      &.menu_btn {
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        transition: 400ms;
        transform: scale(1.2);
        margin-right: 5px;
      }
    }

    .search_form {
      background-color: #f5f5f5;
      color: #f5f5f5;
      display: flex;
      align-items: flex-start;
      box-shadow: 0 0 10px #222;
      border: 1px solid #a52a2a;
      margin: 0;
      width: fit-content;
      height: 30px;
      transition: 400ms;

      button {
        background: none;
        border-right: 1px solid #a52a2a;
        font-weight: 600;
        color: #a52a2a;
        padding: 7px 10px;
        height: 100%;
        box-shadow: none;
      }

      input {
        height: 100%;
        width: 300px;
        max-width: 80vw;
        padding: 7px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .admin_nav {
      button {
        &.menu_btn {
          display: unset;
        }
      }

      .search_form {
        input {
          width: 230px;
        }
      }
    }

    &.active_admin_nav {
      transform: translateY(-180%);

      .admin_nav {
        button {
          &.menu_btn {
            transform: translateY(180%) scale(1.2);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .admin_nav {
      .search_form {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 180%);

        input {
          height: 100%;
        }
      }
    }

    &.active_admin_nav {
      .admin_nav {
        .search_form {
          left: 0;
          transform: translate(0, calc(180%));

          input {
            width: 160px;
          }
        }
      }
    }
  }
`;

export default StyledAdminNav;
