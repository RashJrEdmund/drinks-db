import styled from '@emotion/styled';

const StyledBody = styled.div`
  background-color: gold;
  margin: 0;
  padding: 3rem 0 0;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  .drinks-container {
    background-color: brown;
    margin: 3rem auto;
    width: 98vw;
    max-width: 1224px;
    height: fit-content;
    min-height: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    .drink {
      background-color: green;
      width: 100%;
      height: fit-content;
      min-height: 300px;
      margin: 10px 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .drinks-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 600px) {
    .drinks-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledBody;
