/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MdDeleteForever, MdSave } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import StyleCrudSideMenu from './index.style';

export default function CrudSideMenu({
  cardOptionsRef,
  activeMenu,
  setActiveMenu,
}) {
  const navigate = useNavigate();

  return (
    <StyleCrudSideMenu activeMenu={activeMenu} ref={cardOptionsRef}>
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
    </StyleCrudSideMenu>
  );
}
