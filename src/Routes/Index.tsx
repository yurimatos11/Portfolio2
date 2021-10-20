import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';


const Routes: React.FC = () => {
  return (
      <>
        <Switch>
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="" component={Home}/>
        </Switch>
      </>
  );
}

export default Routes;