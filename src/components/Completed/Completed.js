import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Completed extends Component {
    render() {
        return (
            <>
                <div>
                    <h2>Thank you for your feedback!!!</h2>
                </div>
                    <Router>
                        <Link to="/"><button>Return to Homepage</button></Link>
                    </Router>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Completed);