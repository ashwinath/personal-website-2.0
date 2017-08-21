import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import SubPage from '../Components/SubPage';

class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = calculateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }

  resizeListener = event => this.setState(() => calculateDimensions());

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

const calculateDimensions = () => {
  let windowWidth;
  if (window.innerWidth > 768) {
    windowWidth = window.innerWidth * 0.625;
  } else {
    windowWidth = window.innerWidth * 10/12;
  }
  let windowHeight = windowWidth * 0.625

  return {
    windowWidth: windowWidth - 10,
    windowHeight: windowHeight
  };
}

export default Workflow;
