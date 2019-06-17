import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
            <h3>How was your day?</h3><Link to="/Feeling"><button>Start</button></Link>
       </>
        )
    }
}

export default connect()(Home);
