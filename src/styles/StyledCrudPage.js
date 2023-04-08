import styled from '@emotion/styled';

const StyleCrudPage = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .admin_nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    margin: 1rem;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    transition: 400ms;

    button {
      background-color: #a52a2a;
      font-weight: 600;
      color: #f5f5f5;
      padding: 7px 10px;
      box-shadow: 0 0 10px #222;
      margin: 0;
    }
  }

  .header {
    font-weight: 600;
    border-bottom: 1px solid grey;
    padding-bottom: 5px;
    margin: 4rem 0 0;
  }

  .card-options {
    max-width: calc(97vw - 10px);
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translate(0, -50%); */
    overflow: auto;
    gap: 20px;
    margin: 1rem 0 0;
    padding: 16px 10px;

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
    background-color: #a52a2a;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 3;
    margin: 1rem;
    padding: 7px 10px;
    box-shadow: 0 0 10px #222;
    width: 20px;
    height: 40px;

    &.active_top_btn {
      display: unset;
    }

    &::before {
      content: ' ';
      background: none;
      position: absolute;
      top: -100%;
      left: 50%;
      height: 0;
      width: 0;
      border-top: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 25px solid #a52a2a;
      border-left: 25px solid transparent;

      transform: translate(-50%);
    }
  }

  @media only screen and (max-width: 768px) {
    .admin_nav {
      &.active_admin_nav {
        transform: translateY(-170%);
      }
    }
    .card-options {
      overflow: auto;
    }
  }
`;

export default StyleCrudPage;
