import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesByGenre } from '../../../redux/actions';
import Card from '../../common/card/Card';
import Pagination from './pagination/Pagination';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";


class Movies extends Component {
  constructor(props) {
    super();

    this.state = {
      genreId: props.match.params.id,
      currentPage: 1
    };
    this.handleOnPages = this.handleOnPages.bind(this)
  }

  componentDidMount(){
    const { genreId, currentPage } = this.state;
    this.props.getMoviesByGenre(genreId, currentPage);
  }

  async handleOnPages(e) {
    const { genreId, currentPage } = this.state;
    let page = e.target.value === 'next' ? currentPage + 1 : currentPage - 1;
    
    await this.props.getMoviesByGenre(genreId, page);
    this.setState({
      currentPage: this.props.movies.data.page
    })
  }

  render() {
    const { data } = this.props.movies;
    const { currentPage } = this.state;

    return (
      <div className="menu">
        <h1 className="title">Movies</h1>
        <Pagination 
          currentPage={currentPage}
          totalPages={data.total_pages}
          handlePages={this.handleOnPages} />
        <div className="card-wrapper">
          {data.results && data.results.map((movie, index) => ( 
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

Movies.propTypes = {
  movies: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return state
};

export default connect(mapStateToProps, { getMoviesByGenre })(Movies);