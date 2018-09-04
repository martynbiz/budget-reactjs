'use strict'

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/u65c4")
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
          {items.map(item => (
            <tr key={item._id.$oid}>
              <td>{item.product_name}</td>
              <td>{item.unit_cost}</td>
            </tr>
          ))}
        </table>
      );
    }
  }
}

const element = <Products name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
