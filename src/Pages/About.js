import React from 'react';
import SubPage from '../Components/SubPage'

const About = () => (
  <SubPage pageName="About Me">
    <Summary/>
    <Biography/>
  </SubPage>
);

const Biography = () => (
  <div id="biography">
    <p className="text-right personal-info-name about-biography-text">
      Ashwin Nath Chatterji
    </p>
    <p className="personal-info-work about-biography-text">
      Software Engineer @ 99.co
    </p>
    <p className="personal-info-education about-biography-text">
      BBA (Marketing), Nanyang Technological University
    </p>
    <p className="about-biography-text pad-bottom">
      Software Engineering autodidact. I turn ideas into reality through a compiler/intepreter. I write backend code professionally but I dabble in frontend during my free time.
    </p>
    <div className="text-center">
      <button onClick={gotoResume}
        className="btn resume-btn">
        Download Resume
      </button>
    </div>
  </div>
);

const gotoResume = () => {
  const resumeLink = encodeURI('https://drive.google.com/open?id=0BxZd-ZB1I2mSRkxQLVdseER3XzQ');
  window.location = resumeLink;
}

const gotoWebsite = ({ target }) => {
  window.location = getIcons()[target.id].website;
}

const getIcons = () => ({
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
});

const Summary = () => (
  <div className="section-band-dark text-center">
    {Object.entries(getIcons()).map(([type, value]) => {
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
);

export default About;
