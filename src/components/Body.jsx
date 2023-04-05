import React from 'react';
import styled from '@emotion/styled';
import DrinksSection from './DrinksSection';
import SideBar from './SideBar';

const StyledBody = styled.div`
  background-color: #331012;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 6rem 0 3rem;

  .sidebar_holder {
    background-color: green;
    width: 100%;
  }

  .drink_section {
    background-color: brown;
    width: 100%;
  }
`;

export default function Body() {
  return (
    <StyledBody>
      <div className="sidebar_holder">
        <SideBar />
      </div>

      <div className="drink_section">
        <DrinksSection />
      </div>
    </StyledBody>
  );
}
