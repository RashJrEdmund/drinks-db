/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';

import { MyContext } from '../../context/MyContext';
import StyledNavBar from './navbar.styles';
import ProfileDropDown from '../profileDropDown/ProfileDropDown';

export default function Navbar({ currentUser }) {
  const { showMenu, setShowMenu } = React.useContext(MyContext);

  // const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();

  const navRef = React.useRef();

  const toggleDropDown = () =>
    setShowMenu((prev) => ({
      ...prev,
      dropDown: !prev.dropDown,
    }));

  // React.useEffect(() => {
  //   let YscrollHolder = 0;
  //   window.addEventListener('scroll', () => {
  //     if (
  //       (!showMenu.side || showMenu.dropDown) &&
  //       window.scrollY >= YscrollHolder
  //     )
  //       navRef.current?.classList.add('active_navBar');
  //     else navRef.current?.classList.remove('active_navBar');

  //     YscrollHolder = window.scrollY;
  //   });
  // }, [showMenu.side]);

  return (
    <StyledNavBar ref={navRef}>
      <div className="navBar-container">
        <button
          className="side_menu_btn"
          type="button"
          onClick={() => {
            setShowMenu((prev) => ({ ...prev, side: !prev.side }));
          }}
        >
          <CgMenuGridR />
          Filters
        </button>

        <div className="left_group">
          <p className="drinks_db">
            <FaDatabase /> DrinksDB
          </p>

          <p className="user_status">
            Status: <br className="break" />{' '}
            <span>
              {currentUser?.is_admin
                ? 'Admin'
                : (currentUser && 'Api User') || 'Guest'}
            </span>
          </p>
        </div>

        {/* <span
          className="profile_section"
          tabIndex="0"
          onClick={(e) => {
            console.log(e.currentTarget);
            if (!showMenu.dropDown) {
              setShowMenu((prev) => ({
                ...prev,
                dropDown: !prev.dropDown,
              }));
            }
          }}
          onBlur={() => setShowMenu((prev) => ({ ...prev, dropDown: false }))}
        >
          <div className="profile_logo" title="go to profile">
            {showMenu.dropDown && <ProfileDropDown currentUser={currentUser} />}
          </div>

          <span>{currentUser?.last_name || 'userName'}</span>
        </span> */}

        <span
          className="profile_section"
          tabIndex="0"
          onClick={toggleDropDown}
          onBlur={() => setShowMenu((prev) => ({ ...prev, dropDown: false }))}
        >
          <div className="profile_logo" title="go to profile">
            {showMenu.dropDown && <ProfileDropDown currentUser={currentUser} />}
          </div>

          <span>{currentUser?.last_name || 'userName'}</span>
        </span>
      </div>
    </StyledNavBar>
  );
}
