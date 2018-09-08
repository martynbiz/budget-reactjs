import React, { Component } from 'react';

import TransactionsForm from './Transactions/TransactionsForm';

import {
  Prompt
} from 'react-router-dom';

class TransactionsCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        // TODO we need to fill this with the item's values
      },
      isChanged: false
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
    this.setState({
      isChanged: false,
    });
    event.preventDefault();
  }

  render() {
    const formData = this.state.formData;

    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={this.state.isChanged}
          message="Are you sure you want to leave?"/>
        <TransactionsForm {...formData} onChange={this.handleChange}/>
        <button type="submit" className="button primary">Create</button>
      </form>
    );
  }
}

export default TransactionsCreate;
