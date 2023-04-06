/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledFooter from '../styles/StyledFooter';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <StyledFooter className="footer" id="footer">
      <p
        className="getkey_btn"
        type="button"
        onClick={() => navigate('/apipage')}
      >
        get an api key
      </p>

      <p>twitter</p>
      <p>facbook</p>
      <p>Instagram</p>

      <button
        className="to_top_btn"
        type="button"
        onClick={() => window.scrollTo(0, 0)}
      >
        Back to top
      </button>
    </StyledFooter>
  );
}
