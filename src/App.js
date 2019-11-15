import React from 'react';
import Navbar from './commonComponents/Navbar.js';
import Footer from './commonComponents/Footer.js';
import PageAbout from './PageAbout/PageAbout.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop.js';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
    <div className="container">
        <Navbar/>
        <Switch>
	          <Route exact name="index" path="/" component={PageAbout} />
        </Switch>
        <Footer/>
    </div>
    </ScrollToTop>
    </Router>
  );
}

export default App;
