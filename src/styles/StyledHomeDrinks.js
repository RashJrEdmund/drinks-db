import styled from '@emotion/styled';

const StyledHomeDrinks = styled.div`
  .drinks-container {
    padding: 1rem 5px 0;
    margin: 0 auto 3rem;
    width: 100%;
    max-width: 97vw;
    height: fit-content;
    min-height: 700px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    .drink {
      position: relative;
      background-color: #fff;
      background-position: center;
      background-size: cover;
      width: 100%;
      max-width: 310px;
      height: fit-content;
      min-height: 310px;
      margin: 0 auto 35px;

      h3 {
        background-color: #000;
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        height: 35px;
        font-size: 1.2rem;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      p {
        background-color: #a52a2a;
        color: black;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        letter-spacing: 1px;
        line-height: 25px;
        transition: 0.5s;
        z-index: 2;
        cursor: pointer;
        overflow: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        &.active_description {
          transform: scale(1.1);
          opacity: 1;
          border: 0.5px solid #cee;
          -ms-overflow-style: none;
          scrollbar-width: none;
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
    .drinks-container {
      grid-template-columns: repeat(2, 1fr);

      .drink {
        box-shadow: 0 0 10px;
      }
    }

    .body_images {
      .first_img {
        width: 100%;
        max-width: 270px;
        max-height: 270px;
        margin: 0 5px;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .drinks-container {
      grid-template-columns: 1fr;
    }

    .body_images {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export default StyledHomeDrinks;
