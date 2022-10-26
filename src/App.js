import React from 'react';
import Destination from './components/Destination';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ScollToTop from './components/ScollToTop';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <ScollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default App;
