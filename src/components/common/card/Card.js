import React from 'react';

const Card = (props) => {
    const { title, text, image } = props;
    return (
        <div className="card">
            <img src={image} alt="Avatar"/>
            <div className="container">
                <h4><b>{title}</b></h4> 
                <p>{text}</p> 
            </div>
        </div>
    )
}

export default Card;