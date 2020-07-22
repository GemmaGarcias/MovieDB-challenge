import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenresList } from '../../redux/actions';
import {
  Link
} from "react-router-dom";
class Home extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  componentDidMount(){
    this.props.getGenresList();
  }

  render() {
    const { results } = this.props.genres;
    return (
      <div className="menu">
        <h1 className="title">Home</h1>
        <ul>
          { results.map((category, index) => (
            <li className="items" key={index}>
              <Link className="link" to={`/category/${category.id}`}>{category.name}</Link>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return state
};

export default connect(mapStateToProps, { getGenresList })(Home);
