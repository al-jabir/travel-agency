import React from 'react';
import Destination from './components/Destination';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Services from './components/Services';
import Tours from './components/Tours';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Offer />
      <Tours />
    </>
  );
};

export default App;
