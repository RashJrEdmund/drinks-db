/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { TiEdit } from 'react-icons/ti';
import { MdDeleteForever, MdSave, MdKeyboardControlKey } from 'react-icons/md';
import { BsBarChartFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

import { MyContext, CrudContext } from '../../context/MyContext';
import AdminGaurd from '../../HOCs/AdminGaurd';
import StyleCrudPage from './StyledCrudPage';
import Stats from '../../components/Stats';
import CategoryIngredientFrom from '../../components/categoryIngredientForm/CategoryIngredientForm';

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
    show: { drink: false, category: false, ingredient: false },
    type: '', // could be 'create' || 'edit' depending on which button clicked it
    class: '',
  });

  const handleCreateNew = (name) => {
    if (name === 'drink')
      setEdit({
        chosenOne: {
          userId: currentUser.id,
        },
        show: { drink: true, category: false, ingredient: false },
        type: 'create',
      });
    else if (name === 'category')
      setEdit({
        chosenOne: {},
        show: { drink: false, category: true, ingredient: false },
        type: 'create',
        class: 'category',
      });
    else
      setEdit({
        chosenOne: {},
        show: { drink: false, category: false, ingredient: true },
        type: 'create',
        class: 'ingredient',
      });
  };

  const handleCatAndIngrEdit = (itemType, itemObj) => {
    const holder = edit;

    holder.show[`${itemType}`] = true;
    holder.type = 'edit';
    holder.class = itemType;
    holder.chosenOne = itemObj;

    setEdit(() => ({ ...holder }));
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
      value={{
        edit,
        setEdit,
        currentUser,
        handleCreateNew,
        handleCatAndIngrEdit,
      }}
    >
      {(edit.show.category || edit.show.ingredient) && (
        <CategoryIngredientFrom edit={edit} setEdit={setEdit} />
      )}

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
                <AiOutlineMenu />
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
            title="view statistics"
            onClick={() => setActiveMenu((prev) => ({ ...prev, stats: true }))}
          >
            <BsBarChartFill />
          </button>

          <button
            ref={topBtnRef}
            className="to_top_btn"
            type="button"
            title="scroll to top"
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
