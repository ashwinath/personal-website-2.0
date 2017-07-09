import React, { Component } from 'react';
import SubPage from '../Components/SubPage'

class About extends Component {
  render() {
    return (
      <SubPage pageName="About Me">
        <Summary/>
        <Biography/>
      </SubPage>
    );
  }
}

function Biography() {
  return (
    <div id="biography">
      <p className="text-right personal-info-name about-biography-text">
        Ashwin Nath Chatterji
      </p>
      <p className="personal-info-work about-biography-text">
        Software Engineer - DXC Techology
      </p>
      <p className="personal-info-education about-biography-text">
        BBA (Marketing), Nanyang Technological University
      </p>
      <p className="about-biography-text pad-bottom">
        I taught myself to write software and made it my profession. I write enterprise software for a living using Java but I do not restrict my technology stack to only that. I spend most of my free time experimenting with slightly more modern technology such as Redis, Node.js, React.js etc.
      </p>
      <div className="text-center">
        <button onClick={gotoResume}
          className="btn resume-btn">
          Download Resume
        </button>
      </div>
    </div>
  )
}

function gotoResume() {
  const resumeLink = encodeURI('https://drive.google.com/file/d/0BxZd-ZB1I2mSNmVyRGZxTEZqNms/view?usp=sharing');
  window.location = resumeLink;
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
    desc: "Build highly concurrent software with Node.",
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
