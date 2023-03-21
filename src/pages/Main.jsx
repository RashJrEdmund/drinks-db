import '../styles/Main.css';
import React from 'react';

import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';

function Main() {
  return (
    <div className="Main">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default Main;
