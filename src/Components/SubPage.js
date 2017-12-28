import React, { Component } from 'react';
import PageDetails from '../Components/PageDetails';
import PropTypes from 'prop-types';

class SubPage extends Component {
  render() {
    return (
      <div className="col-xs-9 main-section">
        <PageDetails pageName={this.props.pageName}/>
        {this.props.children}
      </div>
    );
  }
}

PageDetails.propTypes = {
  pageName: PropTypes.string
}

export default SubPage;
