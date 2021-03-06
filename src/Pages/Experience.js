import React, { Component } from 'react';
import SubPage from '../Components/SubPage'
import PropTypes from 'prop-types';
import DXC from '../images/DXC.png';
import Epikk from '../images/Epikk.png';
import NinetyNine from '../images/ninety-nine.png'

const Experience = () => (
  <SubPage pageName="Experience">
    {getWorkExperiences().map(workExperience => (
      <WorkExperience key={workExperience.company} workExperience={workExperience}/>
    ))}
  </SubPage>
);

const getWorkExperiences = () => [
  {
    company: "99.co",
    picture: NinetyNine,
    title: "Backend Engineer",
    tools: "Python, Tornado, NGINX",
    duration: "Jan 2018 - Present",
    className: "section-band-dark",
  },
  {
    company: "DXC Technology",
    picture: DXC,
    title: "Software Engineer",
    tools: "Java, Spring, Hibernate, Axis2, Spring Batch, Quartz Scheduler, Oracle DB",
    duration: "July 2016 - Dec 2017",
    className: "",
  },
  {
    company: "Epikk Co",
    picture: Epikk,
    title: "Content Marketer",
    duration: "May 2015 - July 2015",
    className: "section-band-dark",
  },
];

class WorkExperience extends Component {
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
    const { workExperience } = this.props;
    const { width } = this.state;
    const mobile = width <= 768;
    const verticalAlign = mobile ? "" : "vcenter"

    return (
      <div key={workExperience.company}
        className={`work-exp ${workExperience.className}`}>
        <div className={`col-md-3 text-center ${verticalAlign}`}>
          <img src={workExperience.picture}
            alt={workExperience.company}
            className="img-thumbnail work-img"/>
        </div>
        <div className={`col-md-6 ${verticalAlign}`}>
          <div className="work-exp-desc">
            <p className="work-company">{workExperience.company}</p>
            <p className="work-title">{workExperience.title}</p>
            {workExperience.tools ? <p className="work-tools">{workExperience.tools}</p> : ""}
            <p className="work-duration">{workExperience.duration}</p>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * 
 * Object should have
 * - company
 * - picture
 * - title
 * - duration
 * - className (additional)
 */
WorkExperience.propTypes = {
  workExperience: PropTypes.object
};

export default Experience;
