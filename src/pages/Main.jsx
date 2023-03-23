import '../styles/Main.css';
import React from 'react';

import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import AuthGaurd from '../components/AuthGaurd';

// eslint-disable-next-line react/prop-types
function Main({ name, user }) {
  return (
    <div className="Main">
      <Navbar />
      <h1>
        {name}-{user.firstName}
      </h1>
      <Body />
      <Footer />
    </div>
  );
}

export default AuthGaurd(Main);
