import React, { Component } from 'react';
import './PageAbout.css';
import SectionBox from './SectionBox.js';
class PageAbout extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron personalInfoBox">
          <div className="wrapper d-none d-sm-block">
            <div className="title">
              <div id="avatarDiv">
                <img className="avatarImg" src={process.env.PUBLIC_URL +'/images/HarmeetSingh.png'} alt="HarmeetSinghImage"></img>
              </div>
              <div id="textDiv">
               <h1 className="text-center">Harmeet Singh</h1>
                <p className="lead text-center">Software Developer</p>
              </div>
            </div>
          </div>

          <div className="d-xs-none d-sm-none">
              <div id="avatarDiv">
                <img className="avatarImgSmall" src={process.env.PUBLIC_URL +'/images/HarmeetSingh.png'} alt="HarmeetSinghImage"></img>
              </div>
              <div id="textDiv">
                <h2 className="text-center">Harmeet Singh</h2>
                <p className="lead text-center">Software Developer</p>
              </div>
          </div>
          
          <p className="my-4">
           I am a Software Development Engineer at <i>Zillow</i>. Previously I worked for Amazon. I have completed my Master's in Computer Science from <i>University of Southern California.</i>
           <br/>
           My main focus has been Full Stack Web Develoment and some Game Develoment and I like to learn new technologies and frameworks.
           <br/>
           You can have a look at my resume and projects from the below given links.
           <br/>
           Please feel free to <a href="mailto:harmeet651@gmail.com">contact me</a>.
          </p>
          <hr/>
          
          <div className="contactMethods row"> 
            <div className="contact col-3 text-center">
              <a href="mailto:harmeet651@gmail.com" target="_blank"><span className="contactIcon text-center"><i className="fas fa-envelope"/></span>
              <span className="contactText text-center">harmeet651@gmail.com</span></a>
            </div>
            <div className="contact col-3 text-center">
              <a href="https://github.com/harmeet651" target="_blank"><span className="contactIcon text-center"><i className="fab fa-github"/></span>
              <span className="contactText text-center">My Github</span></a>
            </div>
             <div className="contact col-3 text-center">
              <a href="https://www.linkedin.com/in/harmeet651" target="_blank"><span className="contactIcon text-center"><i className="fab fa-linkedin"/></span>
              <span className="contactText text-center">My LinkedIn</span></a>
            </div>
             <div className="contact col-3 text-center">
              <a href="https://www.instagram.com/singh.harmeet/" target="_blank"><span className="contactIcon text-center"><i className="fab fa-instagram"/></span>
              <span className="contactText text-center">Ig: singh.harmeet</span></a>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <SectionBox title='CV' icon='far fa-address-card' target='/resume'/>
          <SectionBox title='Projects' icon='fa-th' target='/projects'/>
        </div>
      </div>
    );
  }
}

export default PageAbout;