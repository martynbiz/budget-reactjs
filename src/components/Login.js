import React, { Component } from 'react';

import {
  Redirect
} from 'react-router-dom';

import ShowErrors from './includes/ShowErrors';

import Auth from './api/Auth';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

    const {
      email,
      password
    } = this.state;

    const { from } = this.props.location.state || { from: { pathname: "/" } };

    // TODO make this redirect consistent with others
    Auth.login(email, password,

      // successHandler
      (data) => {
        this.setState({
          redirectTo: from
        });
      },

      // errorHandler
      (data) => {

        this.setState({
          errors: data.errors
        });
      }
    );
    event.preventDefault();
  }

  render() {

    const {
      redirectTo,
      errors
    } = this.state;

    // handle redirects
    if (redirectTo) {
      return <Redirect to={redirectTo} />
    }

    return (
      <div>
        <ShowErrors errors={errors}/>
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
      </div>
    );
  }
}

export default Login;
