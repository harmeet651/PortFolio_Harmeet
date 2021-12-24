import React, { Component } from 'react';
import './PageResume.css';

class PageResume extends Component {

  render() {

    return (
      <div>
        <h1 className="text-center"><strong>Curriculum Vitae</strong></h1>
        <embed id="cv" src={process.env.PUBLIC_URL + '/images/Harmeet_Resume_Latest.pdf'}/>
      </div>
      
    );

  }
}

export default PageResume;