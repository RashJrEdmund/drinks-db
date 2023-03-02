/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import MYContext from './context/MyContext';
import FetchData from './data/FetchData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [drinks, setDrinks] = React.useState({});

  React.useEffect(() => {
    FetchData()
      .then((res) => setDrinks(res))
      .catch((err) => console.log('Erro!', err));
  }, []);

  return (
    <div className="App">
      <MYContext.Provider value={{ drinks }}>
        <Navbar />
        <Hero />
        <Body />
        <Footer />
      </MYContext.Provider>
    </div>
  );
}

export default App;
