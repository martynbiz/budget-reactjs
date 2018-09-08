import React, { Component } from 'react';

import {
  Prompt
} from 'react-router-dom';

class TransactionsCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
      [name]: value,
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
    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={this.state.isChanged}
          message="Are you sure you want to leave?"/>

        <label>
          Description:
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <label>
          Amount:
          <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
        </label>
        <label>
          Purchased:
          <input type="text" name="purchased_at" value={this.state.purchased_at} onChange={this.handleChange} />
        </label>

        <button type="submit">Create</button>
      </form>
    );
  }
}

export default TransactionsCreate;
