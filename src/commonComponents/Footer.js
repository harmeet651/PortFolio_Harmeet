import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
       <div>
        <hr/>
        <span style={{color: 'gray'}}>©{(new Date()).getFullYear()} Harmeet Singh. All rights reserved. Made with React.</span>
      </div>
    );
  }
}

export default Footer;