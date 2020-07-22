import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../../redux/actions';

class MovieDetail extends Component {
  constructor(props) {
    super();

    this.state = {
      movieId: props.match.params.id
    };
  }

  componentDidMount(){
    this.props.getMovieDetail(this.state.movieId);
  }

  render() {
    const { results } = this.props.movies;
    console.log(results, 'jj')
    return (
      <div className="menu">
        <h1 className="title">Detail Movie</h1>
        <p>{results.title}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return state
};

export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);