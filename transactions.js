'use strict'

/**
 * @see Table sorting https://codepen.io/austinlyons/pen/YpmyJB
 */

/*
Notes: move ajax out of table coz we need to control when to make calls when
  we need the ajax caller as a single object: for calling, and storing items
*/

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
class TransactionsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  		// start_date: '',
  		// end_date: ''
    };

    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(event, name) {
    console.log(this.props);
    this.props.onSort(event, name);
    event.preventDefault();
  }

  render() {
      const {
          error,
          isLoaded,
          items
      } = this.props;
      if (error) {
          return <div> Error: {error.message} < /div>;
      } else if (!isLoaded) {
          return <div> Loading... </div>;
      } else {
          return (
              <table>
                  <thead>
                      <tr>
                          <th onClick={(e) => this.handleSort(e, 'description')} >Description</th>
                          <th onClick={(e) => this.handleSort(e, 'amount')} >Amount</th>
                          <th onClick={(e) => this.handleSort(e, 'category')} >Category</th>
                          <th onClick={(e) => this.handleSort(e, 'purchased_at')} >Date</th>
                      </tr>
                  </thead>
                  <tbody>
                      {items.map(item => (
                      <tr key={item.id}>
                          <td>{item.description}</td>
                          <td>{item.amount}</td>
                          <td>{item.category}</td>
                          <td>{item.purchased_at}</td>
                      </tr>
                      ))}
                  </tbody>
              </table>
          );
      }
  }
}

/**
 * This is just the display for search form. It needs to be passed submit and change
 * handles in its props
 */
class TransactionsSearchForm extends React.Component {

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

class TransactionsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
  		filters:{
        // start_date: '',
    		// end_date: ''
      },
      sortBy: "purchased_at",
      sortDir: "desc"
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleTableSort = this.handleTableSort.bind(this);
  }

  componentDidMount() {
    this.loadData( this.state.filters );
  }

  loadData(filters) {

    console.log(filters);

    fetch("transactions.json")
      .then(res => res.json())
      .then(
          (items) => {
              this.setState({
                  isLoaded: true,
                  items: items
              });

              console.log("Data loaded:", items);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              });
          }
      );
  }

  compareBy(key) {
      return function(a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
      };
  }

  handleTableSort(event, key) {

      let arrayCopy = [...this.state.items];
      arrayCopy.sort(this.compareBy(key)); // asc

      // sort by. Reset direction if new sort column
      let dir = this.state.dir;
      if (key !== this.state.sortBy) {
          dir = "asc";
      } else { // toggle
          dir = (this.state.sortDir === "asc") ? "desc" : "asc";
      }

      // toggle dir, reverse on desc
      if (dir === "desc") {
          arrayCopy = arrayCopy.reverse();
      }

      this.setState({
          items: arrayCopy,
          sortBy: key,
          sortDir: dir
      });

  }

  handleSearchSubmit(event, filters) {
    this.setState({
      filters: filters
    });
    this.loadData( filters );
  }

  render() {

    const {
      items,
      error,
      isLoaded
    } = this.state;

    return (
      <div>
        <TransactionsSearchForm onSubmit={this.handleSearchSubmit} />
        <TransactionsTable items={items} error={error} isLoaded={isLoaded} onSort={this.handleTableSort} />
      </div>
    );
  }
}

ReactDOM.render(
    <TransactionsView />,
    document.getElementById('root')
);
