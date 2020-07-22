import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesByGenre } from '../../../redux/actions';
import Card from '../../common/card/Card';
import {
  Link
} from "react-router-dom";


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

    return (
      <div className="menu">
        <h1 className="title">Movies</h1>
        <div className="card-wrapper">
          {results.map((movie, index) => ( 
            <Link key={index} to={`/movie-detail/${movie.id}`}>
              <Card 
                image={movie.poster_path} 
                title={movie.title} 
                text={movie.overview}/>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return state
};

export default connect(mapStateToProps, { getMoviesByGenre })(Movies);