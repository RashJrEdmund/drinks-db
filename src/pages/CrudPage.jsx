/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { MyContext, CrudContext } from '../context/MyContext';
import StyleCrudPage from '../styles/StyledCrudPage';

export default function CrudPage() {
  const { customAlert } = React.useContext(MyContext);
  const navigate = useNavigate();
  const topBtnRef = React.useRef();
  const cardOptionsRef = React.useRef();

  const [edit, setEdit] = React.useState({
    drinks: false,
    categories: false,
    ingredients: false,
  });

  React.useEffect(() => {
    customAlert('admin previledges');
  }, []);

  React.useEffect(() => {
    let YscrollHolder = 0;
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 135 && window.scrollY <= YscrollHolder) {
        topBtnRef.current?.classList.add('active_top_btn');
      } else topBtnRef.current?.classList.remove('active_top_btn');

      YscrollHolder = window.scrollY;
    });
  }, []);

  return (
    <CrudContext.Provider value={{ edit, setEdit }}>
      <StyleCrudPage>
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate('/')}
        >
          home
        </button>

        <h1 className="header">start Editing</h1>

        <div ref={cardOptionsRef} className="card-options">
          <div data-test onClick={() => navigate('drinks', { replace: true })}>
            <h1>EDIT </h1>
            <h1>DRINKS</h1>
          </div>

          <div
            data-test
            onClick={() => navigate('categories', { replace: true })}
          >
            <h1>EDIT </h1>
            <h1>CATEGORIES</h1>
          </div>

          <div
            data-test
            onClick={() => navigate('ingredients', { replace: true })}
          >
            <h1>EDIT </h1>
            <h1>INGREDIENTS</h1>
          </div>
        </div>

        <button
          ref={topBtnRef}
          className="to_top_btn"
          type="button"
          onClick={() => window.scrollTo(0, cardOptionsRef.current.ofsettop)}
        >
          &top;
        </button>

        <Outlet />
      </StyleCrudPage>
    </CrudContext.Provider>
  );
}
