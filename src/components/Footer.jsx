import React from 'react';
import StyledFooter from '../styles/StyledFooter';

export default function Footer() {
  return (
    <StyledFooter className="footer" id="footer">
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
