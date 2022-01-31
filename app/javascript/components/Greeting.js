import React from "react"
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

function getGreeting() {
  return (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch(`v1/messages.json`)
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingSuccess(json)))
      .catch((error) => console.log(error));
  };
}

export function getGreetingSuccess(json) {
  return {
    type: GET_GREETING_SUCCESS,
    json,
  };
}
class Greeting extends React.Component {
  render () {

    const { greeting } = this.props;

    const greetingList = greeting.map((greet, index) => {
      return <li key={index}>{ greet.greeting }</li>
    })
    return (
      <React.Fragment>
        <p>Click the button below to generate a random message</p>
        <br />
        <button onClick={() => this.props.getGreeting()}>Get Greeting</button>
        <br />
        <ul>{ greetingList }</ul>
      </React.Fragment>
    );
  }
}
const structuredSelector = createStructuredSelector({
  greeting: state => state.greeting
});

const mapDispatchToProps = { getGreeting };

export default connect(structuredSelector, mapDispatchToProps)(Greeting)