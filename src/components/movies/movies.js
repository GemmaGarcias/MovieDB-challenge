import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesByGenre } from '../../redux/actions';
class Movies extends Component {
  constructor(props) {
    super();

    this.state = {
      genreId: props.match.params.id
    };
  }

  componentDidMount(){
    this.props.getMoviesByGenre(this.state.genreId);
  }

  render() {
    const { results } = this.props.movies;
    console.log(results)
    return (
      <div className="menu">
        <h1 className="title">Movies</h1>
        {results.map((movie, index) => ( <p>{movie.title}</p>))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return state
};

export default connect(mapStateToProps, { getMoviesByGenre })(Movies);