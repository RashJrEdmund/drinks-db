import styled from '@emotion/styled';

const StyledBody = styled.div`
  background-color: gold;
  margin: 0;
  padding: 3rem 0;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .drinks-container,
  .drinks-container_2 {
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

  .body_images {
    margin: 0 auto 1rem;
    width: 95vw;
    max-width: 1224px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .first_img {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 300px;
      width: 300px;
      box-shadow: 0 0 10px #000;
    }
  }

  @media only screen and (max-width: 768px) {
    .drinks-container,
    .drinks-container_2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .body_images {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    .drinks-container,
    .drinks-container_2 {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledBody;
