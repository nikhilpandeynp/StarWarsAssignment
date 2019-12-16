import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import SignIn from './SignIn';
import PlanetSearch from './PlanetSearch';

const App = () => (
  <div>
    <Switch>
      <Route path="/planets">
        <PlanetSearch />
      </Route>
      <Route path="/">
        <SignIn />
      </Route>
    </Switch>
  </div>
);

export default App;