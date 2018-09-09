import React, { Component } from 'react';

import {
  Prompt,
  Redirect
} from 'react-router-dom';

import TransactionsForm from './includes/TransactionsForm';
import FormErrors from './includes/FormErrors';
import TransactionsApi from './api/Transactions';

class TransactionsCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChanged: false,
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      formData: {
        [name]: value,
      },
      isChanged: true,
    });
  }

  handleSubmit(event) {

    const successHandler = () => {
      this.setState({
        isChanged: false,
        redirectToReferrer: true
      });
    }
    successHandler.bind(this);

    const errorHandler = (errors) => {
      this.setState({
        errors: errors
      });
    }
    errorHandler.bind(this);

    TransactionsApi.create(
      this.state, // TODO whitelist this?
      successHandler,
      errorHandler
    );

    event.preventDefault();
  }

  render() {

    if (this.state.redirectToReferrer === true) {
      return <Redirect to='/transactions' />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={this.state.isChanged}
          message="Are you sure you want to leave?"/>
        <FormErrors errors={this.state.errors}/>
        <TransactionsForm {...this.state} onChange={this.handleChange}/>
        <button type="submit" className="button primary">Create</button>
      </form>
    );
  }
}

export default TransactionsCreate;
