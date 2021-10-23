import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Contact from '../Pages/Contact';
import Home from '../Pages/Home';


const Routes: React.FC = () => {
  return (
      <>
      <BrowserRouter>
        <Switch>
              <Route path="/Contact" component={Contact} />
              <Route path="" component={Home}/>
          </Switch>
      </BrowserRouter>
      </>
  );
}

export default Routes;