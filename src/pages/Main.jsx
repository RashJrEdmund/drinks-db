/* eslint-disable react/prop-types */
import '../styles/Main.css';
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthGaurd from '../HOFs/AuthGaurd';
import Body from '../components/Body';

function Main({ currentUser }) {
  return (
    <div className="Main">
      <Navbar currentUser={currentUser} />
      <Body />
      <Footer />
    </div>
  );
}

export default AuthGaurd(Main);
