import React from 'react';
import styled from '@emotion/styled';
import DrinksSection from './DrinksSection';
import SideBar from './SideBar';
import { MyContext } from '../context/MyContext';

const StyledBody = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 2rem 0 3rem;
  max-width: 1400px;
  margin: 5rem auto 0;
  gap: 10px;

  .sidebar_holder {
    background: none;
    width: 100%;
    height: 100%;
  }

  .drinks_section {
    background: none;
    width: 100%;
    height: fit-content;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

function GettingDrinks() {
  return (
    <h2
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#f5f5f5',
        minHeight: '400px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      getting drinks...
    </h2>
  );
}

export default function Body() {
  const { fetchedData } = React.useContext(MyContext);
  const { Drinks } = fetchedData;

  if (!Drinks) return <GettingDrinks />;

  return (
    <StyledBody>
      <div className="sidebar_holder">{/* <SideBar /> */}</div>

      <div className="drinks_section">
        <DrinksSection />
      </div>
    </StyledBody>
  );
}
