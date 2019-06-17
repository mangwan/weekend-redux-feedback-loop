import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feeling extends Component {
    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: { [propertyName]: event.target.value },
        })
    }

    render() {
        return (
            <>
            <div>
                <h2>How are you feeling today?</h2>
            </div>
            <div>
                <h4>Feeling?</h4>
                <select
                    value={this.props.reduxState.feedback.feeling}
                    onChange={this.handleChangeFor('feeling')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <Router>
                    <Link to="/Understanding"><button>Next</button></Link>
                </Router>
            </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Feeling);