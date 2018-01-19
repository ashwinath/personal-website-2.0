import React from 'react';
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
    duration: "Jan 2018 - Present",
    className: "section-band-dark"
  },
  {
    company: "DXC Techology (Formerly HPE)",
    picture: DXC,
    title: "Software Engineer",
    duration: "July 2016 - Dec 2017",
    className: ""
  },
  {
    company: "Epikk Co",
    picture: Epikk,
    title: "Content Marketer",
    duration: "May 2015 - July 2015",
    className: "section-band-dark"
  },
];

const WorkExperience = ({ workExperience }) => (
  <div key={workExperience.company}
    className={`work-exp ${workExperience.className}`}>
    <div className="col-md-3 text-center">
      <img src={workExperience.picture}
        alt={workExperience.company}
        className="img-thumbnail work-img"/>
    </div>
    <div className="col-md-9">
      <div className="work-exp-desc">
        <p className="work-company">{workExperience.company}</p>
        <p className="work-title">{workExperience.title}</p>
        <p className="work-duration">{workExperience.duration}</p>
      </div>
    </div>
  </div>
);

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
