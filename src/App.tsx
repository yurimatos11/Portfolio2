import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Index';
import Header from './Components/Header';
import GlobalStyles from './Styles/global';

const App = () => (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
    </>
);

export default App;
