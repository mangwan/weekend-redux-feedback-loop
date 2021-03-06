import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Feeling extends Component {
    state = {
        feeling: '',
    };

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
        })
    }

    handleClick = () => {
        if (this.state.feeling === ""){
            alert('Missing information!')
        } else {
        this.props.dispatch({
            type: 'SET_FEEDBACK', 
            payload: this.state
        })
        this.props.history.push('/Understanding');
    }
}

    render() {
        return (
            <>
                <div>
                    <h2>How are you feeling today?</h2>
                </div>
                <div>
                    <h4>Feeling?</h4>
                    <input type="number" min="1" max="5" value={this.state.feeling} onChange={this.handleChange} />
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

export default connect(mapReduxStateToProps)(Feeling);