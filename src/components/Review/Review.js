import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Review extends Component {
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
            Feelings: {this.props.reduxState.feedback.feeling}
            <br/>
            Understanding: {this.props.reduxState.feedback.understanding}
            <br/>
            Support: {this.props.reduxState.feedback.support}
            <br/>
            Comments: {this.props.reduxState.feedback.comments}
            <br/>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Review);