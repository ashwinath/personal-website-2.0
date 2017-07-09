import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div id="side-bar" className="col-md-3">
        <Introduction/>
        <Links/>
        <Social/>
      </div>
    );
  }
}

function gotoLinkedIn() {
  window.location = 'https://www.linkedin.com/in/ashwin-chatterji-87702b50/';
}

function gotoFacebook() {
  window.location = 'https://www.facebook.com/ashwinath';
}

function gotoGithub() {
  window.location = 'https://github.com/ashwinath';
}

function Introduction() {
  return (
    <div id="introduction"
      className="middle">
      <p id="brand">Ashwin</p>
      <p id="description">Software Engineer</p>
    </div>
  )
}

function Links() {
  const blogSite = 'https://blog.ashwinchat.com';
  const links = ["Home", "About", "Portfolio", "Experience"];
  return (
    <div id="links"
      className="middle">
      {links.map(link => {
        return (
          <NavLink
            key={link}
            className="link"
            activeClassName="selected"
            to={`/${link}`}>
            <p>{link}</p>
          </NavLink>
        )
      })}
      <a className="link" href={blogSite}><p>Blog</p></a>
    </div>
  )
}

function Social() {
  return (
    <div id="social" className="middle">
      <i onClick={gotoLinkedIn} 
        className="fa fa-3x fa-linkedin-square social-icon"/>
      <i onClick={gotoFacebook}
        className="fa fa-3x fa-facebook-square social-icon"/>
      <i onClick={gotoGithub}
        className="fa fa-3x fa-github-square social-icon"/>
    </div>
  )
}

export default SideBar;
