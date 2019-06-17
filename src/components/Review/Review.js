import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Review extends Component {

    handleClickSubmit = () => {
        console.log('in handleClickSubmit');
    }

    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: { [propertyName]: event.target.value },
        })
    }

    render() {
        return (
            <>
                <h2>Review Your Feedback</h2>
                <ul>
                    <li>Feelings: {this.props.reduxState.feedback.feeling}</li>
                    <br />
                    <li>Understanding: {this.props.reduxState.feedback.understanding}</li>
                    <br />
                    <li>Support: {this.props.reduxState.feedback.support}</li>
                    <br />
                    <li>Comments: {this.props.reduxState.feedback.comments}</li>
                    <br />
                </ul>
            {/*need to include a ternary operator to check if form is complete*/}
            <Router>
                <Link to="/Completed"><button onClick="this.handleClickSubmit">Submit</button></Link>
            </Router>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Review);