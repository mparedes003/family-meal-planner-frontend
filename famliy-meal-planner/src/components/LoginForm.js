import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../store/actions';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    },
  };

  // event handler to handle any changes
  changeHandler = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

  // Logs in a new member
  logIn = (event) => {
    event.preventDefault();
    this.props.logIn(this.state.credentials, this.props.history);
    this.setState({
      credientials: {
        username: '',
        password: '',
      },
    });
  };

  render() {
    // if user is logged in
    if (localStorage.getItem('token')) {
      // redirect user to their dashboard
      return <Redirect to='/dashboard' />;
    }

    return (
      <div>
        {this.props.loggingIn ? (
          <h2>Loading</h2>
        ) : (
          <form onSubmit={this.logIn}>
            <h3>Kindly login for further access</h3>
            <p>Username</p>
            <input
              type='text'
              required
              name='username'
              onChange={this.changeHandler}
              value={this.input}
            />
            <p>Passsword</p>
            <input
              type='text'
              required
              name='password'
              onChange={this.changeHandler}
              value={this.input}
            />
            <button type='submit'>Login</button>
            {/* Sign up if not already an existing member */}
            <p>
              Not a member? Please <Link to='/register'>Register Here</Link>
            </p>
          </form>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (state) => ({
  loggingIn: state.loggingIn,
  success: state.success,
});

export default connect(mapDispatchToProps, {
  logIn,
})(LoginForm);
