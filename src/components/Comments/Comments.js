import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';


class Comments extends Component {
    state = {
        comments: '',
    };

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: this.state,
        })
        this.props.history.push('/Review');
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
                        type="text"
                        rows="10" cols="75"
                        onChange={this.handleChange}
                        value={this.props.feedback.feedback.comments}>
                    </textarea>
                    <br/>
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
    feedback: reduxState,
})

export default connect(mapReduxStateToProps)(Comments);