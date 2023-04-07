import styled from '@emotion/styled';

const StyledHomeDrinks = styled.div`
  .drinks-container,
  .drinks-container_2 {
    background-color: gold;
    margin: 0 auto 3rem;
    width: 100%;
    max-width: 97vw;
    height: fit-content;
    min-height: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    .drink {
      position: relative;
      background-color: #fff;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: fit-content;
      min-height: 300px;
      margin: 0 0 10px;

      h3 {
        background-color: #a52a2a;
        background: linear-gradient(to bottom, #00000065, #00000065, #00000065);
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: fit-content;
        font-size: 1.2rem;
        transition: 0.5s;
      }

      p {
        background-color: #a52a2a;
        background: linear-gradient(to bottom, #00000065, #00000065, #00000065);
        color: black;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        font-size: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        /* opacity: 0; */
        transition: 0.5s;
      }

      &:hover {
        p {
          background-color: #a52a2a;
          background: linear-gradient(
            to bottom,
            #00000065,
            #00000065,
            #00000065
          );
          color: #fff;
          opacity: 1;
          height: 100%;
          font-size: unset;
        }

        h3 {
          bottom: unset;
          top: 0;
          font-size: unset;
        }
      }
    }
  }

  .body_images {
    margin: 1rem auto 1.5rem;
    width: 100%;
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
      max-width: 97vw;
      box-shadow: 0 0 10px #000;
    }
  }

  @media only screen and (max-width: 1000px) {
    .drinks-container,
    .drinks-container_2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .body_images {
      .first_img {
        width: 100%;
        max-height: 270px;
        margin: 0 5px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .drinks-container,
    .drinks-container_2 {
      grid-template-columns: 1fr;
    }

    .body_images {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export default StyledHomeDrinks;
