import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Index';
import Header from './Components/Header';
import GlobalStyles from './Styles/global';

const App = () => (
    <>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
);

export default App;
