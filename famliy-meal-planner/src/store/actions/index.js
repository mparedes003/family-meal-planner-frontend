import axios from 'axios';
// import axiosAuthHelper from '../../util/axiosAuthHelper';

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

// Get All Recipes Actions
export const FETCH_TITLES_START = 'FETCH_TITLES_START';
export const FETCH_TITLES_SUCCESS = 'FETCH_TITLES_SUCCESS';
export const FETCH_TITLES_FAILURE = 'FETCH_TITLES_FAILURE';

export const getAllRecipes = (recipeID) => (dispatch) => {
  dispatch({ type: FETCH_TITLES_START });
  // axiosWithAuth()
  // axiosAuthHelper()
  axios
    .get(`http://localhost:9999/recipes`)
    .then((res) => {
      dispatch({ type: FETCH_TITLES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_TITLES_FAILURE, payload: err });
    });
};

// Get a Recipe by id Actions
export const FETCH_RECIPE_START = 'FETCH_RECIPE_START';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_FAILURE = 'FETCH_RECIPE_FAILURE';

export const getRecipe = (id) => {
  return (dispatch) => {
    // axiosAuthHelper()
    axios
      .get(`http://localhost:9999/recipes/${id}`)
      .then((res) => {
        dispatch({
          type: FETCH_RECIPE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: FETCH_RECIPE_FAILURE, payload: err });
      });
  };
};

// Add new recipe actions
export const ADD_RECIPE_START = 'ADD_RECIPE_START';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const addRecipe = (newRecipe, history) => (dispatch) => {
  dispatch({ type: ADD_RECIPE_START });

  const token = localStorage.getItem('token');

  axios
    .create({
      headers: {
        Authorization: token,
      },
    })
    .post('http://localhost:9999/recipes', newRecipe)
    .then((res) => {
      console.log('data', res.data);
      dispatch({
        type: ADD_RECIPE_SUCCESS,
        // form, // react-final-form
        payload: res.data,
        // payload: state,
      });
    })
    .catch((err) => {
      dispatch({ type: ADD_RECIPE_FAILURE, payload: err });
    });
};
