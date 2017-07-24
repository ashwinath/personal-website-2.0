import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import SubPage from '../Components/SubPage';

// TODO: scale this properly.
class Workflow extends Component {
  render() {
    const windowWidth = window.innerWidth * 0.75 - 15;
    const windowHeight = windowWidth / 1440 * 900;
    return (
      <SubPage pageName="Workflow">
        <div id="video-player">
          <ReactPlayer 
            url="/workflowvideo"
            width={windowWidth}
            height={windowHeight}
            playing loop muted/>
        </div>
      </SubPage>
    );
  }
}

export default Workflow;
