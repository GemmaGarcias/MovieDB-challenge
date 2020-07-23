import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { title, text, image } = props;
    return (
        <div className="card">
            <img src={`http://image.tmdb.org/t/p/w185${image}`} alt="Avatar"/>
            <div className="container-text">
                <h4><b>{title}</b></h4> 
                <p>{text}</p> 
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string
  };  

export default Card;