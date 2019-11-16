import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb" style={{display:"inline-block",width:"100%"}}>
        	<a href="/"><b className="name">Harmeet Singh</b></a>
        	<div className="float-right">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
        		&nbsp;/&nbsp;
        		<NavLink to="/resume" activeClassName="active">Resume</NavLink>
        		&nbsp;/&nbsp;
        		<NavLink to="/projects" activeClassName="active">Projects</NavLink>
        	</div>
  			
		</ol>
      </div>
    );
  }
}

export default Navbar;