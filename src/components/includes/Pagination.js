import React, { Component } from 'react';

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
class Pagination extends Component {

  render() {

    const {
      totalItems,
      itemsPerPage,
      currentPage,
      onPaginate
    } = this.props;

    // generate the page links
    let links = [];
    for (let i=0, p=1; i<totalItems; i=i+itemsPerPage, p++) {
        if (currentPage === p) {
          links.push(<li key={p} className="current"><span className="show-for-sr">You're on page</span> {p}</li>);
        } else {
          links.push(<li key={p}><a aria-label="Page {p}" onClick={(e) => onPaginate(e, p)}>{p}</a></li>);
        }
    }

    let lastPage = Math.ceil(totalItems / itemsPerPage);

    return (
      <nav aria-label="Pagination">
        <ul className="pagination">
          {currentPage === 1 ? (
            <li className="pagination-previous disabled">Previous <span className="show-for-sr">page</span></li>
          ) : (
            <li className="pagination-previous"><a aria-label="Previous page" onClick={(e) => onPaginate(e, 1)}>Previous <span className="show-for-sr">page</span></a></li>
          )}

          {links}

          {currentPage === lastPage ? (
            <li className="pagination-next disabled">Next <span className="show-for-sr">page</span></li>
          ) : (
            <li className="pagination-next"><a aria-label="Next page" onClick={(e) => onPaginate(e, lastPage)}>Next <span className="show-for-sr">page</span></a></li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
