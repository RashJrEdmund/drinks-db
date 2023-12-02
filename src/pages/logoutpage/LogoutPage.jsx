/* eslint-disable no-fallthrough */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import logoutBg from '../../images/wine_collection.png';

const StyledLogoutPage = styled.div`
  background: linear-gradient(to bottom, #00000065, #00000065, #00000065),
    url(${logoutBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;

  .alternatives {
    background: none;
    background: linear-gradient(to bottom, #00000091, #00000091, #00000091);
    border: 1px solid #f5f5f5;
    width: 95vw;
    max-width: 600px;
    height: fit-content;
    color: #f5f5f5;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1.5rem 10px;
    overflow: auto;

    h2 {
      border-bottom: 1px solid #f5f5f5;
      margin: 0 0 1rem;
      padding: 0 0 10px;
    }

    .sub_alternatives {
      background: none;
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 0 10px;
      margin: 0 0 1.5rem;
    }

    .sign_up_section,
    .login_section,
    .guest_alternative {
      width: fit-content;
      max-width: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.2rem;
      letter-spacing: 4px;
      margin: 0;
      padding: 1rem 10px;
    }

    button:hover {
      background-color: grey;
    }

    button {
      background-color: #f5f5f5;
      font-size: 1.2rem;
      padding: 1rem 2rem;
      margin: 2rem 0 1rem;
      transition: 0.5s;
    }

    .guest_alternative button {
      background-color: #a52a2a;
      color: #f5f5f5;
    }

    .guest_alternative button:hover {
      box-shadow: 0 0 10px #a52a2a;
      background-color: unset;
    }
  }

  @media only screen and (max-width: 600px) {
    .sub_alternatives {
      flex-direction: column;
      gap: 16px;
    }

    .alternatives button:hover {
      background-color: unset;
      box-shadow: unset;
    }
  }
`;

export default function LogoutPage() {
  const navigate = useNavigate();

  const navigateToForm = (param) => {
    switch (param) {
      case 'login':
        navigate('/login');
        break;
      case 'register':
        navigate('/register');
        break;
      case '/':
        navigate('/');
      default:
        break;
    }
  };

  return (
    <StyledLogoutPage>
      <div className="alternatives">
        <h2>Welcome to the DrinksDB</h2>
        <div className="sub_alternatives">
          <div className="login_section">
            <p>login to existing account</p>
            <button
              className="login_btn"
              type="button"
              name="login"
              onClick={(e) => navigateToForm(e.target.name)}
            >
              Login
            </button>
          </div>

          <div className="sign_up_section">
            <p>don&apos;t have an account yet?</p>
            <button
              className="sign_up_btn"
              type="button"
              name="register"
              onClick={(e) => navigateToForm(e.target.name)}
            >
              SignUp
            </button>
          </div>
        </div>

        <div className="guest_alternative">
          <button
            className="guest_user"
            type="button"
            name="/"
            onClick={(e) => navigateToForm(e.target.name)}
          >
            Skip
          </button>
        </div>
      </div>
    </StyledLogoutPage>
  );
}
