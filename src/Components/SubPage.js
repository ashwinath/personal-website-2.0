import React, { Component } from 'react';
import PageDetails from '../Components/PageDetails';

class SubPage extends Component {
  render() {
    return (
      <div className="col-md-9 main-section">
        <PageDetails pageName={this.props.pageName}/>
        {this.props.children}
      </div>
    );
  }
}

export default SubPage;
