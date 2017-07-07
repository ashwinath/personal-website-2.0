import React, { Component } from 'react';
import MobileDetect from 'mobile-detect';
import { Redirect } from 'react-router-dom'

class Blog extends Component {
  render() {
    const md = new MobileDetect(window.navigator.userAgent);
    console.log(md.mobile())
    if (md.mobile()) {
      // TODO: Redirect directly to blog since iframes has probblems with mobile
    }
    const ghost = {
      __html: "<iframe src='https://blog.ashwinchat.com/' width='100%' height='100%'></iframe>"
    }
    return (
      <div className="col-md-10 blog">
        <div className="blog"
          dangerouslySetInnerHTML={ghost} />
      </div>
    );
  }
}

export default Blog;
