import styled from '@emotion/styled';

const StyleCrudPage = styled.div`
  position: relative;
  background-color: gold;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .back-btn {
    position: absolute;
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
    max-width: 90vw;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 1rem 0 0;

    [data-test] {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: #a52a2a;
      color: #f5f5f5;
      width: 230px;
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

  @media only screen and (max-width: 768px) {
    .card-options {
      /* grid-template-columns: 1fr; */
      overflow: auto;
    }
  }
`;

export default StyleCrudPage;
