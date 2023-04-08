import styled from '@emotion/styled';

const StyledDrinksForm = styled.div`
  .drink_form_overlay {
    position: fixed;
    background-color: #00000086;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
  }

  @keyframes formAnime {
    from {
      top: -50%;
    }
    to {
      top: 50%;
    }
  }

  .form_container {
    animation: formAnime;
    animation-duration: 0.6s;

    position: fixed;
    background-color: #000000e2;
    top: 50%;
    left: 50%;
    width: 97vw;
    max-width: 650px;
    height: fit-content;
    max-height: 97vh;
    overflow: auto;
    transform: translate(-50%, -50%);
    z-index: 4;

    display: flex;
    flex-direction: column;
    padding: 1rem 10px 2rem;

    [name='cancel-btn'] {
      background: none;
      color: #a52a2a;
      font-weight: 600;
      font-size: 1.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin: 1rem 0 0;

      h3 {
        width: 100%;
        color: #f5f5f5;
        cursor: default;
      }

      .drink_name {
        background: none;
        color: #f5f5f5;
        border: none;
        border-bottom: 1px solid #f5f5f5;
        height: 35px;
        width: 100%;
        padding: 10px 0;
        font-size: 1.1rem;
        text-align: center;
        margin: 10px 0;
      }

      .swipe_to_see_img {
        justify-self: right;
        text-align: right;
        width: 100%;
        color: #f5f5f5;

        &::after {
          content: ' ->';
        }
      }

      .text_area_and_image {
        width: 100%;
        height: fit-content;
        min-height: 260px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin: 7px 0;
        padding: 10px 0;
        overflow: auto;

        textarea {
          height: fit-content;
          min-height: 240px;

          min-width: 100%;
          padding: 10px;
          margin: 0;
          line-height: 20px;
        }

        .image-div {
          position: relative;

          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          min-width: 100%;
          height: 250px;
          cursor: pointer;

          &.active-image-div {
            /* transform: scale(2.5); */
          }

          .image_input {
            background: none;
            border: none;
            width: 87px;
            position: absolute;
            left: 10%;
            bottom: 0;
            margin: 10px;
          }

          .clear_img_btn {
            background: #0000006e;
            color: #f5f5f5;
            font-weight: 600;
            position: absolute;
            right: 10%;
            bottom: 0;
            margin: 10px;
          }
        }
      }

      span {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        gap: 10px;

        input {
          height: 35px;
          width: 100%;
          padding: 10px;
        }

        .add_recipe_btn {
          background: none;
          min-width: 40px;
          color: #f5f5f5;
          font-weight: 1000;
          padding: 0;
          font-size: 2.5rem;
        }
      }

      .recipe-option {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin: 7px 0;

        p {
          color: #f5f5f5;
          text-align: left;
          height: fit-content;
          width: 100%;
          padding: 10px;
          word-wrap: break-word;
          word-break: normal;
          cursor: default;
        }

        button {
          background: none;
          color: #a52a2a;
          font-size: 35px;
          cursor: pointer;

          * {
            padding: 0;
            margin: 0;
          }
        }
      }

      .submit-drink-btn {
        background-color: #a52a2a;
        color: #f5f5f5;
        margin: 1rem auto 0;
        width: 100%;
        padding: 10px 0;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .image-div {
      .image_input {
        left: 0;
      }

      .clear_img_btn {
        right: 0;
      }
    }
  }
`;

export default StyledDrinksForm;
