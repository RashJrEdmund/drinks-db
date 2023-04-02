import styled from '@emotion/styled';
import coverBg from '../images/dark_wine.png';

const StyledUserProfile = styled.div`
  background: linear-gradient(to bottom, #00000065, #00000065, #00000065),
    url(${coverBg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
  color: #f5f5f5;

  .profile_update_container {
    width: 95vw;
    max-width: 1000px;
    height: fit-content;
    min-height: 100vh;
    margin: 0 auto;
    padding: 4rem 2rem 2rem;
    display: flex;
    flex-direction: column;

    button {
      background-color: #cce;
      padding: 6px 10px;
      font-size: 16px;
      margin: 0 0 2rem;
    }

    .profile_detail_holder {
      width: 100%;
      height: fit-content;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 40% 1fr;
      justify-content: space-between;
      gap: 1rem;

      .profile_sidebar {
        background: linear-gradient(to bottom, #00000065, #00000065, #00000065);
        border: 1px solid #a52a2a;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: calc(100% - 1rem);
        height: fit-content;
        padding: 1rem;

        .zoom_overlay {
          background: linear-gradient(
            to bottom,
            #00000065,
            #00000065,
            #00000065
          );
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
        }

        .profile_img {
          background-color: #cce;
          background-position: center;
          background-size: cover;
          height: 90px;
          width: 90px;
          border-radius: 5px;
          margin: 0 0 10px;
          /* cursor: pointer; */

          &.active_profile_img {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            height: 500px;
            width: 500px;
            max-width: 97vw;
            z-index: 6;
          }
        }

        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;

          li {
            margin: 1rem 0;

            span {
              color: #a52a2a;
              font-weight: 700;
              letter-spacing: 2px;
            }

            &.status {
              span {
                font-weight: 700;
                letter-spacing: 3px;
              }
            }
          }
        }
      }

      /* editing the form */

      .profile_update_form {
        background: linear-gradient(to bottom, #00000065, #00000065, #00000065);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: fit-content;
        margin: 0;
        padding: 2rem 10px;
        border: 1px solid #a52a2a;

        h1 {
          margin: 0 0 1rem;
        }

        input {
          height: 40px;
          width: 100%;
          margin: 1rem 0;
          padding: 10px 15px;
        }

        .upload_image_holder {
          background-color: #cce;
          background-position: center;
          background-size: cover;
          position: relative;
          border: 1px solid #cce;
          height: 90px;
          width: 90px;
          overflow: hidden;
          border-radius: 50px;
          cursor: pointer;

          &:hover {
            background-color: #cce;
          }

          input {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-50%, -70%) scale(5);
            opacity: 0;
            margin: 0;
            padding: 0;
            z-index: 4;
            cursor: pointer;
          }

          img {
            position: absolute;
            right: 0;
            bottom: 0;
            transform: translate(50%);
            width: 40px;
            height: 40px;
            z-index: 3;
          }
        }

        button {
          background-color: #a52a2a;
          color: #fff;
          width: 100%;
          height: 40px;
          font-size: 1.1rem;
          letter-spacing: 3px;
          margin: 1rem 0;
        }
      }
    }

    .delete_acount_btn {
      align-self: flex-end;
      background-color: #a52a2a;

      margin: 5rem 0 0;
      color: #f5f5f5;
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 600px) {
    .profile_update_container {
      .profile_detail_holder {
        .profile_sidebar {
          width: 100%;
          margin-bottom: 1.3rem;

          .profile_img {
            &.active_profile_img {
              height: 300px;
              width: 300px;
            }
          }
        }

        grid-template-columns: 1fr;
        justify-content: space-evenly;
      }
    }
  }
`;

export default StyledUserProfile;
