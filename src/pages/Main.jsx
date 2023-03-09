/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import '../styles/Main.css';
import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Body from '../components/Body';
import Footer from '../components/Footer';

function Main() {
  return (
    <div className="Main">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default Main;
