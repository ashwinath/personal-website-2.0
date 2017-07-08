import React, { Component } from 'react';

class PageDetails extends Component {
  render() {
    const pageName = this.props.pageName;
    return (
      <div className="page-details center-vertical-parent">
        <div className={`img-background-${pageName} img-background center-vertical page-name text-center`}>
          <h1>{pageName}</h1>
        </div>
      </div>
    );
  }
}

export default PageDetails;

