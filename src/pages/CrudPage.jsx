/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { TiEdit } from 'react-icons/ti';
import { MdDeleteForever } from 'react-icons/md';
import { BiArrowToTop } from 'react-icons/bi';

import { MyContext, CrudContext } from '../context/MyContext';
import AdminGaurd from '../HOFs/AdminGaurd';
import StyleCrudPage from '../styles/StyledCrudPage';

function CrudPage({ currentUser }) {
  const { customAlert } = React.useContext(MyContext);
  const navigate = useNavigate();
  const topBtnRef = React.useRef();
  const cardOptionsRef = React.useRef();
  const adminNavRef = React.useRef();

  const [edit, setEdit] = React.useState({
    drink: {
      chosenOne: {},
      show: false,
    },
    category: {
      chosenOne: {},
      show: false,
    },
    ingredient: {
      chosenOne: {},
      show: false,
    },
  });

  const handleAdminNav = ({ target }) => {
    const { name } = target;
    if (name === 'Home') navigate('/');
    else if (name === 'Profile') navigate('/profile');
    else customAlert('Loggin out...');
  };

  React.useEffect(() => {
    customAlert('admin dashboard');
  }, []);

  React.useEffect(() => {
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
    <CrudContext.Provider value={{ edit, setEdit }}>
      <StyleCrudPage>
        <div ref={adminNavRef} className="admin_nav">
          {['Home', 'Profile', 'Logout'].map((btn) => (
            <button
              className="back-btn"
              type="button"
              name={btn}
              onClick={handleAdminNav}
            >
              {btn}
            </button>
          ))}
        </div>

        <h1 className="header">start Editing</h1>

        <div ref={cardOptionsRef} className="card-options">
          {['Drinks', 'Categories', 'Ingredients'].map((item) => (
            <div
              data-test
              key={item}
              onClick={() => navigate(item.toLowerCase(), { replace: true })}
            >
              <h1>
                <TiEdit /> edit <MdDeleteForever />
              </h1>
              <h1>{item}</h1>
            </div>
          ))}
        </div>

        <button
          ref={topBtnRef}
          className="to_top_btn"
          type="button"
          onClick={() => window.scrollTo(0, cardOptionsRef.current.ofsettop)}
        >
          <BiArrowToTop />
        </button>

        <Outlet currentUser={currentUser} />
      </StyleCrudPage>
    </CrudContext.Provider>
  );
}

export default AdminGaurd(CrudPage);
