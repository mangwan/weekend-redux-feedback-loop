import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Understanding extends Component {
    state = {
        understanding: '',
    };

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
        })
    }

    handleClick = () => {
        if (this.state.understanding === ""){
            alert('Missing information!')
        } else {
        this.props.dispatch({
            type: 'SET_FEEDBACK', 
            payload: this.state
        })
        this.props.history.push('/Support');
    }

    render() {
        return (
            <>
                <div>
                    <h2>How well are you understanding the content?</h2>
                </div>
                <div>
                    <h4>Understanding?</h4>
                    <input type="number" min="1" max="5" value={this.state.understanding} onChange={this.handleChange} />
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

export default connect(mapReduxStateToProps)(Understanding);