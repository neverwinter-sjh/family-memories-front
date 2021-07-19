import * as React from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Root: React.FC = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);
export default Root;
