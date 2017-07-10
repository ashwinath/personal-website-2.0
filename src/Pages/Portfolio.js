import React, { Component } from 'react';
import SubPage from '../Components/SubPage'
import PropTypes from 'prop-types';
import Website2 from '../images/Website2.png';
import Website from '../images/Website.png';
import PopularMovies from '../images/PopularMovies.png';
import Operator from '../images/Operator.png';

class Portfolio extends Component {
  render() {
    const projects = [
      {
        picture: Website2,
        title: "This Website",
        github: "https://github.com/ashwinath/personal-website-2.0",
        desc: "Code that powers this site."
      },
      {
        picture: Operator,
        title: "Operator",
        github: "https://github.com/ashwinath/operator-rest-server",
        desc: "Personal Assistant for Singaporeans."
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
      },

    ];
    return (
      <SubPage pageName="Portfolio">
        {projects.map(project => {
          return <Project key={project.title} project={project}/>
        })}
      </SubPage>
    );
  }
}

function Project(props) {
  const project = props.project;
  return (
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
  )
}

/**
 * 
 * Object should have
 * - picture
 * - project title
 * - className (additional)
 */
Project.propTypes = {
  workExperience: PropTypes.object
}


export default Portfolio;
