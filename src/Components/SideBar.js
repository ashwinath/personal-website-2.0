import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  render() {
    const links = ["About", "Portfolio", "Work", "Blog"];
    return (
      <div id="side-bar" className="col-md-2">
        <p id="brand">Ashwin Chat</p>
        <p id="description">Self Taught Developer</p>
        {links.map(link => {
          return (
            <NavLink
              id={link}
              className="link"
              activeClassName="selected"
              to={`/${link}`}>
              <p>{link}</p>
            </NavLink>
          )
        })}
      </div>
    );
  }
}

export default SideBar;
