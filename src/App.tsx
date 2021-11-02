import React from 'react';
import Routes from './Routes/Index';
import Header from './Components/Header';
import GlobalStyles from './Styles/global';
import Footer from './Components/Footer';

const App = () => (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
      <Footer />
    </>
);

export default App;
