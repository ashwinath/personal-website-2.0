import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => this.setState(() => (
    {
      width: window.innerWidth
    }
  ));

  render() {
    const { width } = this.state;
    const mobile = width <= 768;
    if (mobile) {
      return (
        <MobileNavBar />
      )
    } else {
      return (
        <DesktopNavBar/>
      );
    }
  }
}

const getBlogSite = () => 'https://blog.ashwinchat.com';
const getLinks = () => [
  "Home",
  "About",
  "Portfolio",
  "Experience",
  "Workflow",
  "Contact"
];

const MobileNavBar = () => (
  <nav id="mobile-nav" className="navbar navbar-default navbar-fixed-top">
    <MobileHeaderBar />
    <MobileLinks {...handleRetractDropdown} />
  </nav>
);

const MobileHeaderBar = () => (
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
);

const handleRetractDropdown = () => document.getElementById("mobile-nav-collapsable").classList.toggle('in');

const MobileLinks = () => (
  <div id="mobile-nav-collapsable" className="collapse navbar-collapse">
    <ul className="nav navbar-nav">
      {getLinks().map(link => (
        <li key={link}>
          <NavLink
            onClick={handleRetractDropdown}
            activeClassName="selected"
            to={`/${link}`}>
            <p>{link}</p>
          </NavLink>
        </li>
      ))}
      <li>
        <a href={getBlogSite()}><p>Blog</p></a>
      </li>
    </ul>
  </div>
);

const DesktopNavBar = () => (
  <div id="side-bar" className="col-xs-3">
    <Introduction/>
    <Links/>
    <Social/>
  </div>
);

const gotoLinkedIn = () => window.location = 'https://www.linkedin.com/in/ashwin-chatterji-87702b50/';

const gotoFacebook = () => window.location = 'https://www.facebook.com/ashwinath';

const gotoGithub = () => window.location = 'https://github.com/ashwinath';

const Introduction = () => (
  <div id="introduction"
    className="middle">
    <p id="brand">Ashwin</p>
    <p id="description">Software Engineer</p>
  </div>
);

const Links = () => (
  <div id="links"
    className="middle">
    {getLinks().map(link => (
      <NavLink
        key={link}
        className="link"
        activeClassName="selected"
        to={`/${link}`}>
        <p>{link}</p>
      </NavLink>
    ))}
    <a className="link" href={getBlogSite()}><p>Blog</p></a>
  </div>
);

const Social = () => (
  <div id="social" className="middle">
    <i onClick={gotoLinkedIn} 
      className="fa fa-3x fa-linkedin-square social-icon"/>
    <i onClick={gotoFacebook}
      className="fa fa-3x fa-facebook-square social-icon"/>
    <i onClick={gotoGithub}
      className="fa fa-3x fa-github-square social-icon"/>
  </div>
);

export default SideBar;
