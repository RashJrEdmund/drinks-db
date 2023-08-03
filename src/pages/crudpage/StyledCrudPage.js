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

  @media only screen and (max-width: 650px) {
    .styled_crud_page_holder {
      width: 98.5%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 7rem 0 4rem;

      .stats_section {
        margin: 2rem 5px 0;
      }
    }
  }
`;

export default StyleCrudPage;
