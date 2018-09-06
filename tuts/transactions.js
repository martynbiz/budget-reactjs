'use strict'

/**
 * @see Table sorting https://codepen.io/austinlyons/pen/YpmyJB
 */

class TransactionsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            sortBy: "purchased_at",
            sortDir: "desc"
        };
    }

    componentDidMount() {
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

    sortBy(key) {
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

    render() {
        const {
            error,
            isLoaded,
            items
        } = this.state;
        if (error) {
            return <div> Error: {error.message} < /div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else {
            return (
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => this.sortBy('description')} >Description</th>
                            <th onClick={() => this.sortBy('amount')} >Amount</th>
                            <th onClick={() => this.sortBy('category')} >Category</th>
                            <th onClick={() => this.sortBy('purchased_at')} >Date</th>
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
  		filters:{
        start_date: '',
    		end_date: ''
      }
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(event, filters) {
    this.setState({
      // filters: {
      //   start_date: event.target.elements.start_date.value,
    	// 	end_date: event.target.elements.end_date.value
      // }
      filters: filters
    });
  }

  render() {
    console.log(this.state);
    const {
      filters
    } = this.state;

    return (
      <div>
        <h1>Transactions</h1>
        <TransactionsSearchForm onSubmit={this.handleSearchSubmit} />
        <TransactionsTable filters={filters} />
      </div>
    );
  }
}

ReactDOM.render(
    <TransactionsView />,
    document.getElementById('root')
);
