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

  changeHandler = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

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
    if (localStorage.getItem('token')) {
      return <Redirect to='/' />;
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
            <p>
              Not a member? Please <Link to='/sign-up'>Register Here</Link>
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
