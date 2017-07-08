import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionBand extends Component {
  render() {
    const band = this.props.sectionType
    const bandDark = band === 'dark'
      ? `section-band-${band}`
      : "";
    const id = this.props.id;
    return (
      <section 
        id={id}
        className={`${bandDark} band`}>
        {this.props.children}
      </section>
    )
  }
}

SectionBand.propTypes = {
  sectionType: PropTypes.string,
  id: PropTypes.id
}

export default SectionBand;
