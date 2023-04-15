/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from '@emotion/styled';
import { MdBrightness1, MdBrightness2, MdArrowBackIos } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import ProfileSettingsGaurd from '../HOFs/ProfileSettingsGaurd';
import { MyContext } from '../context/MyContext';

const StyledSettings = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h1 {
    width: fit-content;
    height: fit-content;
    color: #f5f5f5;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: fit-content;
    margin: 2rem 0 3rem;

    p {
      color: #f5f5f5;
      font-size: 17px;
      margin: 1rem 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;

      &.theme {
        cursor: unset;
      }

      span {
        background-color: #000;
        border: ${({ theme }) =>
          theme ? '1px solid #080' : '1px solid steelblue'};
        border-radius: 7px;
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70px;
        height: 28px;
        padding: 1px 2px;
        @keyframes brightAnime {
          from {
            left: 50%;
          }
          to {
            left: 2px;
          }
        }

        @keyframes darkAnime {
          from {
            right: 50%;
          }
          to {
            right: 2px;
          }
        }

        .bright {
          color: #f5f5f5;
          height: 25px;
          width: 25px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 2px;

          animation: brightAnime;
          animation-duration: 0.5s;
        }

        .dark {
          color: #a52a2a;
          height: 25px;
          width: 25px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 2px;

          animation: darkAnime;
          animation-duration: 0.5s;
        }
      }
    }
  }
`;

function Settings({ currentUser }) {
  const { customAlert } = React.useContext(MyContext);
  const [theme, setTheme] = React.useState(false);

  const navigate = useNavigate();

  const changeTheme = () => {
    customAlert('this feature is not yet available');
    setTheme((prev) => !prev);
  };

  return (
    <StyledSettings theme={theme}>
      <h1>Settings</h1>

      <div className="container">
        <p>User: {currentUser.last_name}</p>

        <p className="theme">
          Theme
          <span className="toggle_theme" onClick={changeTheme}>
            {theme ? (
              <MdBrightness1 className="bright" />
            ) : (
              <MdBrightness2 className="dark" />
            )}
          </span>
        </p>

        {currentUser.is_admin && (
          <div
            className="admin_settings"
            onClick={() => customAlert('this feature is not yet available')}
          >
            <p>admin page</p>
            <ul>
              <li>
                sort how items appear
                <select name="sort" id="">
                  <option value="item_id">item id</option>
                  <option value="item_id">my items</option>
                </select>
              </li>
              <p className="theme">
                Admin Theme
                <span className="toggle_theme" onClick={changeTheme}>
                  {theme ? (
                    <MdBrightness1 className="bright" />
                  ) : (
                    <MdBrightness2 className="dark" />
                  )}
                </span>
              </p>
            </ul>
          </div>
        )}

        <p onClick={() => customAlert('this feature is not yet available')}>
          Langauge: en-us
        </p>

        <p title="login to another account" onClick={() => navigate('/login')}>
          Switch accout
        </p>

        <p onClick={() => window.history.back()}>
          <MdArrowBackIos />
          Back
        </p>
      </div>
    </StyledSettings>
  );
}

export default ProfileSettingsGaurd(Settings);
