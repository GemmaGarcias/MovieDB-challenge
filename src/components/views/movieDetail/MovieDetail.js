import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../common/card/Card';
import { getMovieDetail } from '../../../redux/actions';
import PropTypes from 'prop-types';
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
    const { detailResults } = this.props.movies;

    return (
      <div className="menu">
        <h1 className="title">Detail Movie</h1>
        <div  className="card-wrapper">
            <Card 
                image={detailResults.poster_path} 
                title={detailResults.title} 
                text={detailResults.tagline}
            />

            <div className="data-wrapper">
                <p><strong>Language: </strong>{detailResults.original_language}</p>
                <p><strong>Overview: </strong>{detailResults.overview}</p>
                <p><strong>Release Date: </strong>{detailResults.release_date}</p>
            </div>
        </div>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  movies: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return state
};

export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);