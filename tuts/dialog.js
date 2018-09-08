'use strict'

function Dialog(props) {
  return (
    <div className="callout">
      <h1>
        {props.title}
      </h1>
      {props.children}
    </div>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <Dialog title="Register">
        <label>First name
          <input name="first_name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>Surname
          <input name="surname" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>Email
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>Password
          <input name="password" type="password" value={this.state.email} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSignUp}>
          Register
        </button>
      </Dialog>
    );
  }

  handleChange(event) {
    this.setState( { [event.target.name]: event.target.value } );
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.first_name}!`);
    console.log(this.state);
  }
}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);
