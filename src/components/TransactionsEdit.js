import React, { Component } from 'react';

import {
  Prompt,
  Redirect
} from 'react-router-dom';

import TransactionsForm from './includes/TransactionsForm';
import ShowErrors from './includes/ShowErrors';
// import TransactionsApi from './api/Transactions';

class TransactionsEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChanged: false,
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      isChanged: true,
    });
  }

  handleSubmit(event) {
    this.setState({
      isChanged: false,
      redirectTo: {
        pathname: "/transactions",
        state: { flash_message: "Transaction has been updated" }
      },
    });
    event.preventDefault();
  }

  handleDelete(event) {
    this.setState({
      isChanged: false,
      redirectTo: {
        pathname: "/transactions",
        state: { flash_message: "Transaction has been deleted" }
      },
    });
    event.preventDefault();
  }

  render() {

    // handle redirects
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Prompt
            when={this.state.isChanged}
            message="Are you sure you want to leave?"/>
          <ShowErrors errors={this.state.errors}/>
          <TransactionsForm {...this.state} onChange={this.handleChange}/>
          <button type="submit" className="button primary">Update</button>
        </form>
        <hr/>
        <button type="submit" className="button primary" onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default TransactionsEdit;
