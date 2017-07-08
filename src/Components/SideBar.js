import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  render() {
    const blogSite = 'https://blog.ashwinchat.com';
    const links = ["About", "Portfolio", "Work"];
    return (
      <div id="side-bar" className="col-md-2">
        <div id="introduction">
          <p id="brand">Ashwin</p>
          <p id="description">Self Taught Developer</p>
        </div>
        <div id="links">
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
          <a className="link" href={blogSite}><p>Blog</p></a>
        </div>
        <div id="social">
          <h1>social</h1>
        </div>
      </div>
    );
  }
}

export default SideBar;
