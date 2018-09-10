import React, { Component } from 'react';

class TransactionsFilters extends Component {

  constructor(props) {
    super(props);
    this.state = {
     month: '',
     category: '',
     tag: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * On change, we'll capture the changed filter and send it up
   * @param event {event}
   */
  handleChange(event) {

    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    }, () => {
      this.props.onChange(event, this.state)
    });
  }

  /**
   * This will simply disable form submission, we don't need it
   * @param event {event}
   */
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-4 cell">
            <label className="show-for-sr">Month</label>
            <select name="month" onChange={this.handleChange} value={this.props.month}>
              <option value="">All months</option>
              <option value="2018-09"> Sep 2018</option>
              <option value="2018-08"> Aug 2018</option>
              <option value="2018-07"> Jul 2018</option>
              <option value="2018-06"> Jun 2018</option>
              <option value="2018-05"> May 2018</option>
              <option value="2018-04"> Apr 2018</option>
            </select>
          </div>
          <div className="small-12 medium-4 cell">
            <label className="show-for-sr">Categories</label>
            <select name="category" onChange={this.handleChange} value={this.props.category}>
              <option value="">All categories</option>
              <option value="33">Accommodation</option>
              <option value="1">Alcohol</option>
              <option value="60">ATM charges</option>
              <option value="39">Bicycle hire</option>
            </select>
          </div>
          <div className="small-12 medium-4 cell">
            <label className="show-for-sr">Tag</label>
            <select name="tag" onChange={this.handleChange} value={this.props.tag}>
              <option value="">All tags</option>
              <option value="18">Belladrum festival 2018</option>
              <option value="23">Chicken house</option>
              <option value="20">Christmas 2017</option>
              <option value="16">Fringe2017</option>
            </select>
          </div>
        </div>
      </form>
    );
  }
}

export default TransactionsFilters;
