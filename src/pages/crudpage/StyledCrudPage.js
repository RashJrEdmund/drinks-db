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

    .menu_overlay {
      display: none;
    }

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
    }

    .stats_section {
      background-color: #f5f5f5;
      height: fit-content;
      width: 400px;
      max-width: 86vw;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin: 3.9rem 0 0;
      padding: 16px 10px;
      box-shadow: 0 0 10px #000;

      h2 {
        margin: 5px 0 0;
        border-bottom: 1px solid #a52a2a;
        padding: 0 0 5px;
      }

      .sub_stats {
        width: 100%;
        text-align: left;

        h3 {
          margin: 10px 0 0;
        }

        p {
          line-height: 30px;

          .open_lock {
            color: #080;
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

    .stats_btn {
      display: none;
    }

    .to_top_btn {
      display: none;
      background: #000000ce;
      color: #f5f5f5;
      position: fixed;
      flex-direction: column;
      right: 0;
      bottom: 0;
      z-index: 3;
      margin: 15px;
      font-size: 50px;

      &.active_top_btn {
        display: flex;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .styled_crud_page_holder {
      .menu_overlay {
        background: #000000ac;
        display: ${({ activeMenu }) =>
          activeMenu.stats || activeMenu.side ? 'unset' : 'none'};
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 4;
      }

      .stats_section {
        border-radius: 10px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 5;
        transition: 400ms;
        margin: 3.9rem 5px 0;
        padding: 20px 10px;
        transform: translate(
          ${({ activeMenu }) => (activeMenu.stats ? '0' : '-120%')}
        );
      }

      .stats_btn {
        display: unset;
        background: #a52a2aff;
        color: #f5f5f5;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 3;
        margin: 15px;
        font-size: 18px;
        padding: 10px;

        background: #000000ce;
        color: #f5f5f5;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .styled_crud_page_holder {
      .admin_nav_holder {
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

      .card-options {
        max-height: 95vh;
        overflow-y: auto;
        position: fixed;
        top: 70px;
        right: 0;
        z-index: 5;
        transform: translate(
          ${({ activeMenu }) => (activeMenu.side ? '0' : '120%')}
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

  @media only screen and (max-width: 650px) {
    .styled_crud_page_holder {
      width: 98.5%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 7rem 0 4rem;
      .admin_nav_holder {
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

      .stats_section {
        margin: 2rem 5px 0;
      }
    }
  }
`;

export default StyleCrudPage;
