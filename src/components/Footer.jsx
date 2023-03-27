import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledFooter from '../styles/StyledFooter';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <StyledFooter className="footer" id="footer">
      <div className="footer_column1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi
          facilis deserunt magnam sint repellendus!
        </p>
        <p>contact us</p>
        <div className="media_links">
          <p>something@gmail.com</p>
          <p>facbook</p>
          <p>Instagram</p>
          <p>twitter</p>
          <p>+237 6701</p>
        </div>
        <p>
          get an
          <button
            className="getkey_btn"
            type="button"
            onClick={() => navigate('/apipage')}
          >
            api key
          </button>
        </p>
      </div>

      <div className="footer_column2">
        <button
          className="to_top_btn"
          type="button"
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to top
        </button>
        <p>how do you like our services?</p>
      </div>
    </StyledFooter>
  );
}
