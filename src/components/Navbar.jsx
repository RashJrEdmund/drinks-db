/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import StyledNavBar from '../styles/navbar.styles';
import ProfileDropDown from './ProfileDropDown';

export default function Navbar({ currentUser }) {
  const [showMenu, setShowMenu] = React.useState({
    side: false,
    dropDown: false,
  });

  const navRef = React.useRef();

  React.useEffect(() => {
    let YscrollHolder = 0;
    window.addEventListener('scroll', () => {
      if (
        (!showMenu.side || showMenu.dropDown) &&
        window.scrollY >= YscrollHolder
      )
        navRef.current?.classList.add('active_navBar_container');
      else navRef.current?.classList.remove('active_navBar_container');

      YscrollHolder = window.scrollY;
    });
  }, [showMenu.side]);

  return (
    <StyledNavBar>
      <div ref={navRef} className="navBar-container">
        <div className="left_group">
          <button
            className="side_menu_btn"
            type="button"
            onClick={() => {
              setShowMenu((prev) => ({ ...prev, side: !prev.side }));
            }}
          >
            {showMenu.side ? 'close Filter' : 'open Filter'}
          </button>

          <p className="user_status">
            user Status:{' '}
            <span>
              {currentUser?.is_admin
                ? 'Admin'
                : (currentUser && 'Api User') || 'Guest'}
            </span>
          </p>
        </div>

        <span
          className="profile_section"
          tabIndex="0"
          onClick={() =>
            setShowMenu((prev) => ({ ...prev, dropDown: !prev.dropDown }))
          }
          onBlur={() => setShowMenu((prev) => ({ ...prev, dropDown: false }))}
        >
          <div className="profile_logo" title="go to profile" />
          <span>{currentUser?.last_name || 'userName'}</span>

          {showMenu.dropDown && <ProfileDropDown currentUser={currentUser} />}
        </span>
      </div>
    </StyledNavBar>
  );
}
