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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/Feeling" exact component={Feeling} />
          <Route path="/Understanding" exact component={Understanding} />
          <Route path="/Support" exact component={Support} />
          <Route path="/Comments" exact component={Comments} />
          <br />
        </div>
      </Router>
    );
  }
}

export default connect()(App);

