import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
//import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Support from '../Support/Support';
import Review from '../Review/Review';
import Completed from '../Completed/Completed';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header path="/Header" exact component={Header} />
          <Route path="/" exact component={Home} />
          <Route path="/Feeling" exact component={Feeling} />
          <Route path="/Understanding" exact component={Understanding} />
          <Route path="/Support" exact component={Support} />
          <Route path="/Comments" exact component={Comments} />
          <Route path="/Review" exact component={Review} />
          <Route path="/Completed" exact component={Completed} />
          <Route path="/Admin" exact component={Admin} />
          <br />
        </div>
      </Router>
    );
  }
}

export default connect()(App);

