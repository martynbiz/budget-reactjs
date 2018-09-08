import React, { Component } from 'react';

import Auth from './fakeAuth';

import {
  Redirect
} from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    Auth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
    event.preventDefault();
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
