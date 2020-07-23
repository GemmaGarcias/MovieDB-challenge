import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenresList } from '../../../redux/actions';
import {
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';
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
          { results.map((genre, index) => (
            <li className="items" key={index}>
              <Link className="link" to={`/genre/${genre.id}`}>{genre.name}</Link>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  genres: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return state
};

export default connect(mapStateToProps, { getGenresList })(Home);
