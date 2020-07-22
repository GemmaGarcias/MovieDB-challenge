import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const Home = React.lazy(() => import('./home/Home'));
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
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              <Route exact path="/" render={() => <Home/>}/>
            </Switch>
          </Router>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default App;