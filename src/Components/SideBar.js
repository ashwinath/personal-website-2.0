import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  gotoLinkedIn() {
    window.location = 'https://www.linkedin.com/in/ashwin-chatterji-87702b50/';
  }

  gotoFacebook() {
    window.location = 'https://www.facebook.com/ashwinath';
  }

  gotoGithub() {
    window.location = 'https://github.com/ashwinath';
  }

  render() {
    const blogSite = 'https://blog.ashwinchat.com';
    const links = ["About", "Portfolio", "Work"];
    return (
      <div id="side-bar" className="col-md-3">
        <div id="introduction"
          className="middle">
          <p id="brand">Ashwin</p>
          <p id="description">Autodidact</p>
        </div>
        <div id="links"
          className="middle">
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
        <div id="social" className="middle">
          <i onClick={this.gotoLinkedIn} 
            className="fa fa-3x fa-linkedin-square social-icon"/>
          <i onClick={this.gotoFacebook}
            className="fa fa-3x fa-facebook-square social-icon"/>
          <i onClick={this.gotoGithub}
            className="fa fa-3x fa-github-square social-icon"/>
        </div>
      </div>
    );
  }
}

export default SideBar;
