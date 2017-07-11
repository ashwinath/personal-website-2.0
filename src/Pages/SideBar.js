import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState(() => {
      return { 
        width: window.innerWidth
      }
    });
  }

  handleRetractDropdown() {
    document.getElementById("mobile-nav-collapsable").classList.toggle('in');
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    if (isMobile) {
      return (
        <MobileNavBar
          handleRetractDropdown={this.handleRetractDropdown}/>
      )
    } else {
      return (
        <DesktopNavBar/>
      );
    }
  }
}

const blogSite = 'https://blog.ashwinchat.com';
const links = ["Home", "About", "Portfolio", "Experience"];

function MobileNavBar(props) {
  return (
    <nav id="mobile-nav" className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <button type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#mobile-nav-collapsable"
          aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a id="mobile-brand" className="navbar-brand">Ashwin</a>
      </div>
      <div id="mobile-nav-collapsable" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          {links.map(link => {
            return (
              <li key={link}>
                <NavLink
                  onClick={props.handleRetractDropdown}
                  activeClassName="selected"
                  to={`/${link}`}>
                  <p>{link}</p>
                </NavLink>
              </li>
            )
          })}
          <li>
            <a href={blogSite}><p>Blog</p></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function DesktopNavBar() {
  return (
    <div id="side-bar" className="col-xs-3">
      <Introduction/>
      <Links/>
      <Social/>
    </div>
  )
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
