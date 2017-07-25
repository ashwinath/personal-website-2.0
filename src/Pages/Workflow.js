import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import SubPage from '../Components/SubPage';

class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = calculateDimensions();
    this.resizeListener = this.resizeListener.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }

  // TODO: do the calculation here
  resizeListener(event) {
    this.setState(() => {
      return calculateDimensions();
    });
  }

  render() {
    return (
      <SubPage pageName="Workflow">
        <div id="video-player"
          className="col-xs-10 col-xs-offset-1">
          <ReactPlayer 
            url="/workflowvideo"
            width={this.state.windowWidth}
            height={this.state.windowHeight}
            playing loop muted/>
        </div>
      </SubPage>
    );
  }
}

function calculateDimensions() {
    let windowWidth, windowHeight;
    if (window.innerWidth > 768) {
      windowWidth = window.innerWidth * 0.625;
      windowHeight = windowWidth / 1440 * 900;
    } else {
      windowWidth = window.innerWidth * 10/12;
      windowHeight = windowWidth / 1440 * 900;
    }

    return {
      windowWidth: windowWidth,
      windowHeight: windowHeight
    };
  }


export default Workflow;
