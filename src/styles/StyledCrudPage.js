import styled from '@emotion/styled';

const StyleCrudPage = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0;

  .styled_crud_page_holder {
    width: 98.5%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 0 4rem;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .admin_nav_holder {
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

          &.edit_btn {
            display: none;
            position: absolute;
            right: 0;
            top: 0;
            transition: 400ms;
          }
        }
      }
    }

    .card-options {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin: 3.9rem 0 0;
      padding: 0 5px;

      [data-test] {
        background-color: #a52a2a;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        color: #f5f5f5;
        width: 240px;
        height: 230px;
        border-radius: 10px;
        box-shadow: 0 0 10px #222;
        cursor: pointer;

        h1:nth-of-type(1) {
          color: black;
        }
      }
    }

    .to_top_btn {
      display: none;
      background: #00000059;
      color: #a52a2a;
      position: fixed;
      flex-direction: column;
      right: 0;
      bottom: 0;
      z-index: 3;
      margin: 1rem;
      font-size: 50px;

      &::after {
        content: 'toTop';
        color: #000;
        font-size: 14px;
        align-self: center;
      }

      &.active_top_btn {
        display: flex;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .styled_crud_page_holder {
      .admin_nav_holder {
        .admin_nav {
          button {
            &.edit_btn {
              display: unset;
            }
          }
        }

        &.active_admin_nav {
          transform: translateY(-180%);

          .admin_nav {
            button {
              &.edit_btn {
                transform: translateY(180%);
              }
            }
          }
        }
      }

      .card-options {
        max-height: 95vh;
        overflow-y: auto;
        position: fixed;
        top: 70px;
        right: 0;
        z-index: 3;
        transform: translate(
          ${({ activeMenu }) => (activeMenu ? '0' : '120%')}
        );
        margin: 0;
        transition: 400ms;

        [data-test] {
          width: 200px;
          height: 130px;
        }
      }
    }
  }
`;

export default StyleCrudPage;
