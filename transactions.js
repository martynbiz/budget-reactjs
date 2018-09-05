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
            )
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

function Transactions(props) {
    return (
        <div>
            <h1 className="show-for-sr">Transactions</h1>
            <TransactionsTable />
        </div>
    );
}

ReactDOM.render(
    <Transactions />,
    document.getElementById('root')
);
