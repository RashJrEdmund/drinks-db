import styled from '@emotion/styled';
import formBg from '../images/pour_wine_glass.png';

const StyledRegisterLoginForm = styled.div`
  background: linear-gradient(to bottom, #000000a9, #000000a9, #000000a9),
    url(${formBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: auto;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .regiter_form,
  .login_form {
    width: 95vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    gap: 20px;
    margin: 0 auto;
    padding: 10px 10px 1rem;

    h1 {
      color: #f5f5f5;
      margin: 10px 0;
    }

    p {
      color: #fff;
      margin: 5px 0;
    }

    input {
      background-color: #f5f5f5;
      width: 100%;
      height: 50px;
      padding: 5px 10px;
      box-sizing: border-box;
      border: 1px solid #a52a2a;
      letter-spacing: 2px;
    }

    .password-span {
      position: relative;
      background-color: #f5f5f5;
      width: 100%;
      height: 50px;
      display: flex;
      border: 1px solid #a52a2a;

      input {
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
      }

      button {
        background-color: #f5f5f5;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        color: #000;
        width: fit-content;
        height: calc(100% - 2px);
        padding: 0 0 0 3px;
        margin: 0;
      }
    }

    button {
      width: 100%;
      text-align: center;
      padding: 15px;
      background-color: #a52a2a;
      color: white;
      letter-spacing: 3px;
      font-size: 17px;
      cursor: pointer;
    }

    .switch_paragraph {
      margin: 1rem 0 0;
    }

    .switch_fomr_btn {
      cursor: pointer;
      color: #a52a2a;
      letter-spacing: 2px;
      font-size: 17px;
      font-weight: 700;
    }
  }

  .login_container .forgot_password {
    color: #a52a2a;
    width: fit-content;
    margin: 0;
    cursor: pointer;
  }
`;

export default StyledRegisterLoginForm;
