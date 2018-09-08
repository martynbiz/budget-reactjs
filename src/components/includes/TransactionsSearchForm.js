import React, { Component } from 'react';

class TransactionsSearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
     start_date: '',
     end_date: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onSubmit(event, this.state);
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Start date:
          <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange} />
        </label>
       <label>
          End date:
          <input type="text" name="end_date" value={this.state.end_date} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" className="button primary" />
      </form>
    );
  }
}

export default TransactionsSearchForm;
