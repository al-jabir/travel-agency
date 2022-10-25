import React from 'react';
import Destination from './components/Destination';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Destination />
    </>
  );
};

export default App;
