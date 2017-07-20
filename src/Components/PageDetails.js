import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageDetails extends Component {
  render() {
    const pageName = this.props.pageName;
    return (
      <div className="page-details center-vertical-parent">
        <div className={`img-background img-background center-vertical page-name text-center`}>
          <h1>{pageName}</h1>
        </div>
      </div>
    );
  }
}

PageDetails.propTypes = {
  pageName: PropTypes.string
}

export default PageDetails;

