import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const { currentPage, totalPages, handlePages } = props;
    console.log(totalPages)
    return (
        <div className="pag-wrapper">
            {currentPage > 1 &&
            <button className="pag-button" onClick={handlePages} value="previous">{"<"}</button>}
            <p>Page {currentPage}</p>
            {currentPage < totalPages &&
            <button className="pag-button" onClick={handlePages} value="next">{">"}</button>}
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number || 1, 
    handlePages: PropTypes.func.isRequired,
};

export default Pagination;