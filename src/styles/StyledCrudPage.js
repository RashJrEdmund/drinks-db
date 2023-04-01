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

  .back-btn {
    position: fixed;
    top: 0;
    left: 0;
    margin: 1rem;

    background-color: #a52a2a;
    font-weight: 600;
    color: #f5f5f5;
    padding: 7px 10px;
    box-shadow: 0 0 10px #222;
  }

  .header {
    font-weight: 600;
    border-bottom: 1px solid grey;
    padding-bottom: 5px;
    margin: 2rem 0 0;
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
        letter-spacing: 10px;
      }
    }
  }

  .to_top_btn {
    display: none;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 1rem;

    background-color: #a52a2a;
    font-weight: 600;
    color: #f5f5f5;
    padding: 7px 10px;
    box-shadow: 0 0 10px #222;

    &.active_top_btn {
      display: unset;
    }
  }

  /* @media only screen and (max-width: 768px) {
    .card-options {
      overflow: auto;
    }
  } */
`;

export default StyleCrudPage;
