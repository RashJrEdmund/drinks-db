/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import MyContext from '../context/MyContext';
import StyleCrudPage from '../styles/StyledCrudPage';

export default function CrudPage() {
  const { customAlert } = React.useContext(MyContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    customAlert('admin previledges');
  }, []);

  return (
    <StyleCrudPage>
      <button className="back-btn" type="button" onClick={() => navigate('/')}>
        home
      </button>

      <h1 className="header">start Editing</h1>

      <div className="card-options">
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

      <Outlet />
    </StyleCrudPage>
  );
}
