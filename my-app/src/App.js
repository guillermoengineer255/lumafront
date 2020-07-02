import React from 'react';
import Home from './containers/pages/home/home.jsx';
import { Route, Switch } from 'react-router-dom'

function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
