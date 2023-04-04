/* eslint-disable react/prop-types */
import '../styles/Main.css';
import React from 'react';

import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import AuthGaurd from '../components/AuthGaurd';
// import { MyContext } from '../context/MyContext';

function Main({ name, currentUser }) {
  // const { setCurrentUser } = React.useContext(MyContext);

  // React.useEffect(() => {
  //   // causing a rerender so that the current user will be properly loaded
  //   setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
  // }, []);

  return (
    <div className="Main">
      <Navbar />
      <h1>
        {name}-{currentUser?.first_name}
      </h1>
      <Body />
      <Footer />
    </div>
  );
}

export default AuthGaurd(Main);
