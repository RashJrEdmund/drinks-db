/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { TiEdit } from 'react-icons/ti';
import { MdDeleteForever, MdSave, MdKeyboardControlKey } from 'react-icons/md';

import { MyContext, CrudContext } from '../context/MyContext';
import AdminGaurd from '../HOCs/AdminGaurd';
import StyleCrudPage from '../styles/StyledCrudPage';
import Stats from '../components/Stats';

function CrudPage({ currentUser }) {
  const { customAlert } = React.useContext(MyContext);
  const navigate = useNavigate();
  const topBtnRef = React.useRef();
  const cardOptionsRef = React.useRef();
  const adminNavRef = React.useRef();
  const [activeMenu, setActiveMenu] = React.useState({
    stats: false,
    side: false,
  });

  const [edit, setEdit] = React.useState({
    chosenOne: {},
    show: false,
    type: '', // could be 'create' || 'edit' depending on which button clicked it
  });

  const handleCreateNew = (name) => {
    if (name === 'drink')
      setEdit({
        chosenOne: {
          userId: currentUser.id,
        },
        show: true,
        type: 'create',
      });
    else
      setEdit({
        chosenOne: {},
        show: true,
        type: 'create',
      });
  };

  const handleAdminNav = (e) => {
    const {
      target: { name },
    } = e;

    if (name === 'Home') navigate('/');
    else if (name === 'Profile') navigate('/profile');
    else navigate('/settings');
  };

  React.useEffect(() => {
    customAlert('admin dashboard');

    let YscrollHolder = 0;
    const checkAminNav = () => {
      if (window.scrollY > YscrollHolder) {
        adminNavRef.current?.classList?.add('active_admin_nav');
      } else adminNavRef.current?.classList?.remove('active_admin_nav');
    };

    const checkToTopBtn = () => {
      if (window.scrollY >= 135 && window.scrollY <= YscrollHolder) {
        topBtnRef.current?.classList.add('active_top_btn');
      } else topBtnRef.current?.classList.remove('active_top_btn');
    };

    window.addEventListener('scroll', () => {
      checkAminNav();
      checkToTopBtn();
      YscrollHolder = window.scrollY;
    });
  }, []);

  return (
    <CrudContext.Provider
      value={{ edit, setEdit, currentUser, handleCreateNew }}
    >
      <StyleCrudPage activeMenu={activeMenu}>
        <div className="styled_crud_page_holder">
          <div
            className="menu_overlay"
            onClick={() => setActiveMenu({ stats: false, side: false })}
          />

          <div ref={adminNavRef} className="admin_nav_holder">
            <div className="admin_nav">
              {['Home', 'Profile', 'Settings'].map((btn) => (
                <button
                  key={btn}
                  type="button"
                  name={btn}
                  onClick={handleAdminNav}
                >
                  {btn}
                </button>
              ))}

              <form className="search_form">
                <button type="submit">search</button>
                <input type="text" placeholder="search item" />
              </form>

              <button
                type="button"
                className="menu_btn"
                onClick={() =>
                  setActiveMenu((prev) => ({ ...prev, side: true }))
                }
              >
                Menu
              </button>
            </div>
          </div>

          <Stats currentUser={currentUser} />

          <Outlet />

          <div ref={cardOptionsRef} className="card-options">
            {['Drinks', 'Categories', 'Ingredients'].map((item) => (
              <div
                data-test
                key={item}
                onClick={() => {
                  navigate(item.toLowerCase(), { replace: true });
                  setActiveMenu((prev) => ({ ...prev, side: false }));
                }}
              >
                <h1>
                  <TiEdit /> <MdSave /> <MdDeleteForever />
                </h1>
                <h1>{item}</h1>
              </div>
            ))}
          </div>

          <button
            ref={topBtnRef}
            className="stats_btn"
            type="button"
            onClick={() => setActiveMenu((prev) => ({ ...prev, stats: true }))}
          >
            Stats
            <MdKeyboardControlKey />
          </button>

          <button
            ref={topBtnRef}
            className="to_top_btn"
            type="button"
            onClick={() => window.scrollTo(0, cardOptionsRef.current.ofsettop)}
          >
            <MdKeyboardControlKey />
          </button>
        </div>
      </StyleCrudPage>
    </CrudContext.Provider>
  );
}

export default AdminGaurd(CrudPage);
