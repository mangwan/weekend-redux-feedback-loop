import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Understanding extends Component {
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
                <h2>How well are you understanding the content?</h2>
            </div>
            <div>
                <h4>Understanding</h4>
                <select
                    value={this.props.reduxState.feedback.feeling}
                    onChange={this.handleChangeFor('Understanding')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <Router>
                    <Link to="/Support"><button>Next</button></Link>
                </Router>
            </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Understanding);