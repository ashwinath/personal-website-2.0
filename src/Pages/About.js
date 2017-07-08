import React, { Component } from 'react';
import SubPage from '../Components/SubPage'

class About extends Component {
  render() {
    return (
      <SubPage pageName="About Me">
        <Summary/>
      </SubPage>
    );
  }
}

function gotoWebsite(event) {
  window.location = icons[event.target.id].website;
}

const icons = {
  react: {
    icon: "devicon-react-original",
    desc: "Modern frontend web development.",
    website: "https://facebook.github.io/react/"
  },
  nodejs: {
    icon: "devicon-nodejs-plain",
    desc: "Build highly concurrent apps with Node.",
    website: "https://nodejs.org/en/"
  },
  java: {
    icon: "devicon-java-plain",
    desc: "Enterprise software development.",
    website: "https://www.java.com/en/"
  }
};

function Summary() {
  return (
    <div className="section-band-dark text-center">
      {Object.entries(icons).map(([type, value]) => {
        // Please note that the background colours per icon
        return (
          <div key={type} className="col-md-4 icon-pad">
            <i id={type}
              onClick={gotoWebsite}
              className={`icon ${value.icon}`}/>
            <p 
              className="about-summary-desc">
              {value.desc}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default About;
