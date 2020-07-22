import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//const Home = React.lazy(() => import('./home/Home'));
//const Movies = React.lazy(() => import('./movies/Movies'));

import Home from './home/Home';
import Movies from './movies/Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  render() {
    return (
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/genre/:id" component={Movies}/>
            </Switch>
          </Router>
    );
  }
}

export default App;