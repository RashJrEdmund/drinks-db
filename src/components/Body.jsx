import React from 'react';
import styled from '@emotion/styled';
import DrinksSection from './DrinksSection';
import SideBar from './SideBar';

const StyledBody = styled.div`
  /* background-color: #331012; */
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 2rem 0 3rem;
  max-width: 1400px;
  margin: 5rem auto 0;
  gap: 10px;

  .sidebar_holder {
    background-color: green;
    width: 100%;
    height: 100%;
    /* max-height: 150vh; */
    /* position: relative; */
  }

  .drinks_section {
    background-color: brown;
    width: 100%;
    height: fit-content;
  }
`;

export default function Body() {
  return (
    <StyledBody>
      <div className="sidebar_holder">
        <SideBar />
      </div>

      <div className="drinks_section">
        <DrinksSection />
      </div>
    </StyledBody>
  );
}
