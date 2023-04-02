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
    padding: 4rem 5px 2rem;
    display: flex;
    flex-direction: column;

    .profile-btns {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      height: fit-content;
      margin: 0 0 2rem;

      .back-btn {
        background-color: #cce;
        padding: 6px 10px;
        font-size: 16px;
        margin: 0;
      }

      .edit_profile_btn {
        padding: 6px 10px;
        font-size: 16px;
        margin: 0;
      }
    }

    .profile_detail_holder {
      width: 100%;
      height: fit-content;
      margin: 0;
      padding: 0;
      /* display: grid;
      grid-template-columns: 40% 1fr;
      justify-content: space-between; */
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      gap: 1rem;

      .profile_sidebar {
        background: linear-gradient(to bottom, #00000065, #00000065, #00000065);
        border: 1px solid #a52a2a;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: calc(100% - 1rem);
        height: fit-content;
        padding: 1rem;
        transition: 0.7s;

        &.active_profile_sidebar {
          flex-basis: 10%;
          min-height: 500px;
          background-color: #a52a2a;

          * {
            display: none;
            transform: scale(0);
          }
        }

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

          .delete_acount_btn {
            background: none;
            color: #a52a2a;

            margin: 3rem 0 0;
            padding: 0;
            font-weight: 700;
          }
        }
      }

      /* editing the form */

      .profile_update_form {
        background-color: #00000065;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: fit-content;
        margin: 0;
        padding: 2rem 10px;
        border: 1px solid #a52a2a;
        transition: 0.7s;

        &.active_profile_update_form {
          flex-basis: 10%;
          min-height: 500px;
          background-color: #a52a2a;

          * {
            display: none;
            transform: scale(0);
          }
        }

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
          position: relative;
          background-color: #cce;
          background-position: center;
          background-size: cover;

          align-self: flex-start;
          border: 1px solid #cce;
          height: 60px;
          width: 60px;
          overflow: hidden;
          border-radius: 50px;
          margin: 10px 0;

          input {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -80%) scale(3);
            opacity: 0;
            margin: 0;
            padding: 0;
            z-index: 2;
            height: 60px;
            width: 50px;
            cursor: pointer;
          }
        }

        [type='submit'] {
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
  }

  @media only screen and (max-width: 600px) {
    .profile_update_container {
      .profile_detail_holder {
        gap: 5px;

        .profile_sidebar {
          width: 100%;
          margin-bottom: 1.3rem;

          &.active_profile_sidebar {
            flex-basis: 1%;
          }

          .profile_img {
            &.active_profile_img {
              height: 300px;
              width: 300px;
            }
          }
        }

        .profile_update_form {
          &.active_profile_update_form {
            flex-basis: 1%;
          }
        }
      }
    }
  }
`;

export default StyledUserProfile;
