/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthGaurd from '../HOFs/AuthGaurd';
import Body from '../components/Body';

const StyledMain = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;

function Main({ currentUser }) {
  return (
    <StyledMain>
      <Navbar currentUser={currentUser} />
      <Body HomeOutlet={Outlet} />
      <Footer />
    </StyledMain>
  );
}

export default AuthGaurd(Main);
