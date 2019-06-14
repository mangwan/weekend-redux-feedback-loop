import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
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
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <Route path="/feeling" component={Feeling} />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Support" component={Support} />
          <Route path="/Comments" component={Comments} />
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
