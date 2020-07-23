import React from 'react';

const Pagination = (props) => {
    const { currentPage, totalPages, handlePages } = props;
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

export default Pagination;