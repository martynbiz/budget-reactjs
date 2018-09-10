import React, { Component } from 'react';

/**
 *
 */
class PaginationRows extends Component {

  render() {

    const {
      itemsPerPage,
      children,
      data
    } = this.props;

    // for the slice
    const end = pagination.currentPage * pagination.itemsPerPage;
    const start = end - pagination.itemsPerPage;

    return (
      <div>
        {data.slice(start,end).map(transaction => (
          {children}
        ))};
      </div>
    );
  }
}

export default PaginationRows;
