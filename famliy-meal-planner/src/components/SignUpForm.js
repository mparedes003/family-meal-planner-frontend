import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../store/actions';

class SignUpForm extends React.Component {
  state = {
    username: '',
    password1: '',
    password2: '',
    passwordMatch: true,
  };

  // event handler to handle any changes
  changeHandler = (event) => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // registers a new member
  signUp = (event) => {
    event.preventDefault();
    if (this.state.password1 === this.state.password2) {
      const newUser = {
        username: this.state.username,
        password: this.state.password1,
      };
      this.props.signUp(newUser, this.props.history);
      this.setState({
        username: '',
        password1: '',
        password2: '',
      });
    } else {
      this.setState({ ...this.state, passwordMatch: false });
    }
  };

  render() {
    return (
      <div>
        <div>
          {this.props.signingUp ? (
            <h2>Loading...</h2>
          ) : (
            <div>
              <form onSubmit={this.signUp}>
                <div>
                  <h2>Paredes Family Kitchen</h2>
                </div>
                <p>Username</p>
                <input
                  type='text'
                  required
                  name='username'
                  placeholder='username'
                  onChange={this.changeHandler}
                  value={this.input}
                />
                <p>Password</p>
                <input
                  type='password'
                  required
                  name='password1'
                  onChange={this.changeHandler}
                  value={this.input}
                />
                <p>Confirm password</p>
                <input
                  type='password'
                  required
                  name='password2'
                  onChange={this.changeHandler}
                  value={this.input}
                />
                {/* if the passwords entered do not match, let the user know. */}
                {!this.state.passwordMatch ? (
                  <p>Oops! Your passwords don't match</p>
                ) : (
                  ''
                )}
                <br />
                <button className='signup-btn' type='submit'>
                  Sign Up
                </button>
                {/* Log in if already an existing member */}
                <p>
                  Already a member? Please <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => ({
  signingUp: state.signingUp,
});

export default connect(mapDispatchToProps, {
  signUp,
})(SignUpForm);
