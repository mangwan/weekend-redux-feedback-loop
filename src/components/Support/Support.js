import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Support extends Component {
    state = {
        support: '',
    };

    handleChange = (event) => {
        this.setState({
            support: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_FEEDBACK', 
            payload: this.state
        })
        this.props.history.push('/Comments');
    }

    render() {
        return (
            <>
                <div>
                    <h2>How well are you being supported?</h2>
                </div>
                <div>
                    <h4>Support?</h4>
                    <input type="number" min="1" max="5" value={this.state.support} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Next</button>
                </div>
                <div>
                    <Review />
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Support);