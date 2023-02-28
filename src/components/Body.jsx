import React from 'react';
import StyledBody from '../styles/StyledBody';

export default function Body() {
  return (
    <StyledBody className="body-section" id="body_section">
      <div className="drinks-container">
        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>

        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>

        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>
      </div>
    </StyledBody>
  );
}
