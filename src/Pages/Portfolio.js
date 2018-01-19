import React from 'react';
import SubPage from '../Components/SubPage';
import PropTypes from 'prop-types';
import Website2 from '../images/Website2.png';
import Website from '../images/Website.png';
import PopularMovies from '../images/PopularMovies.png';

const Portfolio = () => (
  <SubPage pageName="Portfolio">
    {getProjects().map(project => (
      <Project key={project.title} project={project}/>
    ))}
  </SubPage>
);

const getProjects = () => [
  {
    picture: Website2,
    title: "This Website",
    github: "https://github.com/ashwinath/personal-website-2.0",
    desc: "Code that powers this site."
  },
  {
    picture: Website,
    title: "Previous Website",
    github: "https://github.com/ashwinath/personal-site",
    desc: "My first attempt at web dev."
  },
  {
    picture: PopularMovies,
    title: "Popular Movies",
    github: "https://github.com/ashwinath/Android_Popular_Movies_App",
    desc: "My first attempt at programming and Android dev."
  }
];

const Project = ({ project }) => (
  <div className="col-md-4">
    <div className="portfolio-item text-center">
      <div className="portfolio-pic-container">
        <a className="portfolio-link" href={project.github}>
          <img className="img-responsive" src={project.picture} alt={project.title}/>
        </a>
      </div>
      <div className="portfolio-caption">
        <h4>{project.title}</h4>
        <p className="text-muted">{project.desc}</p>
      </div>
    </div>
  </div>
);

/**
 * 
 * Object should have
 * - picture
 * - project title
 * - className (additional)
 */
Project.propTypes = {
  workExperience: PropTypes.object
};

export default Portfolio;
