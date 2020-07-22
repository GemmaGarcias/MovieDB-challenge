import React, { Component } from 'react';

class Movies extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  componentDidMount(){
    //this.props.getCategories();
  }

  render() {
    return (
      <div className="menu">
        <h1 className="title">Movies</h1>
      </div>
    );
  }
}

export default Movies;
