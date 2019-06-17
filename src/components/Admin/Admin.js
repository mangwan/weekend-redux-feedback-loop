import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class Admin extends Component {
      
    render() {
        return (
            <>
                <div>
                    <h1>Feedback Results!</h1>
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Admin);