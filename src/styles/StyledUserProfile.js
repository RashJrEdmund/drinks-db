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
    max-width: 1224px;
    height: fit-content;
    min-height: 100vh;
    margin: 0 auto;
    padding: 4rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #a52a2a;
    border-right: 1px solid #a52a2a;

    button {
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
        border: 1px solid #a52a2a;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: calc(100% - 1rem);
        height: fit-content;
        padding: 1rem;

        .profile_img {
          background-color: #f5f5f5;
          height: 90px;
          width: 90px;
          border-radius: 50px;
          margin: 0 0 10px;
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
        }

        grid-template-columns: 1fr;
        justify-content: space-evenly;
      }
    }
  }
`;

export default StyledUserProfile;