import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const Home = React.lazy(() => import('./views/home/Home'));
const Movies = React.lazy(() => import('./views/movies/Movies'));
const MovieDetail = React.lazy(() => import('./views/movieDetail/MovieDetail'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/genre/:id" component={Movies}/>
              <Route path="/movie-detail/:id" component={MovieDetail}/>
            </Switch>
          </Router>
        </Suspense>
    );
  }
}

export default App;