import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Comments extends Component {
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
                <h2>Any comments you want to leave?</h2>
            </div>
            <div>
                <h4>Comments?</h4>
                   <textarea 
                   rows="10" cols="75"
                    onChange={this.handleChangeFor('Comments')}
                    value={this.props.reduxState.feedback.feeling}>
                    </textarea>
                <Router>
                    <Link to="/"><button>Next</button></Link>
                </Router>
            </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Comments);