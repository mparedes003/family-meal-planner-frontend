import axios from 'axios';

// ACTION TYPES
// one for fetching, one for fetched and one for errors

// Sign Up Actions
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUp = (credentials, history) => (dispatch) => {
  const creds = {
    username: credentials.username,
    password: credentials.password,
  };
  dispatch({ type: SIGN_UP_START });
  axios
    .post('http://localhost:9999/auth/register', creds)
    .then((res) => {
      dispatch({ type: SIGN_UP_SUCCESS });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        history.push('/');
      } else {
        credentials.history.push('/log-in');
      }
      return true;
    })
    .catch((err) => {
      dispatch({ type: SIGN_UP_FAILURE, payload: err });
      return false;
    });
};

//Log In Actions
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const logIn = (credentials, history) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axios
    .post('http://localhost:9999/auth/login', credentials)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem('token', res.data.token);
      history.push('/');
      return true;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
      return false;
    });
};
