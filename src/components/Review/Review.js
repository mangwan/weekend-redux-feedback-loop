import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Review extends Component {

    handleClickSubmit = () => {
        console.log('in handleClickSubmit');
        this.props.dispatch({ type: 'SUBMIT_FEEDBACK' })
        const feedback = this.props.reduxState.feedback;
        axios({
            method: 'POST',
            url: '/submit',
            data: feedback
        }).then(response => {
            console.log('response', response)
        })
    }

    render() {
        return (
            <>
                <h2>Review Your Feedback</h2>
                <br/>
                    Feelings: {this.props.reduxState.feedback.feeling}
                    <br />
                    Understanding: {this.props.reduxState.feedback.understanding}
                    <br />
                    Support: {this.props.reduxState.feedback.support}
                    <br />
                    Comments: {this.props.reduxState.feedback.comments}
                    <br/>
                {/*need to include a ternary operator to check if form is complete*/}
                <Router>
                    <Link to="/Completed"><button onClick={this.handleClickSubmit}>Submit</button></Link>
                </Router>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Review);